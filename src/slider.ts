import {Swiper} from 'swiper';
import {items} from "./items";
import {Element} from "./element";
import {Item} from "./item";

export class Slider {
    private static sliderInstance: Swiper;
    private static readonly currentSlideOfWeek: number = Slider.getCurrentWeekNumber();

    /**
     * @description
     * Either returns 0 if the current week number is negative or it returns the number of weeks passed from the beginning
     */
    private static getCurrentWeekNumber(): number {
        const weekNow = this.weeksBetween(new Date('2020-08-23'), new Date());
        return weekNow > 0 ? weekNow : 1;
    }

    /**
     * @description
     * Returns the passed weeks between two dates
     * @param d1
     * @param d2
     * @returns {number}
     */
    private static weeksBetween(d1: Date, d2: Date): number {
        return Math.ceil((d2.getTime() - d1.getTime()) / (7 * 24 * 60 * 60 * 1000));
    }

    /**
     * @description
     * Creates a new Slider instance
     */
    public static create() {
        this.addHideListener();
        this.sliderInstance = new Swiper('[data-container]', {
            initialSlide: this.currentSlideOfWeek,
            slidesPerView: 1,
            init: false,
            keyboard: {
                enabled: true
            },
        });
        this.sliderInstance.on('init', () => this.appendDummySlide());
        this.sliderInstance.on('slideChange', () => this.appendDummySlide());
        this.reRenderSlider();
        (this.sliderInstance as any).init();
    }

    private static addHideListener() {
        const modeElement = document.getElementById('mode');
        if (+localStorage.getItem('mode') === 1) {
            modeElement.click();
        }
        modeElement.addEventListener('change', function () {
            const self = this as HTMLInputElement;
            localStorage.setItem('mode', (+self.checked).toString());
            window.location.reload();
        });
    }

    public static reRenderSlider() {
        document.querySelector('[data-wrapper]').innerHTML = '';
        items
            // We only want the elements until the current week
            .slice(0, this.currentSlideOfWeek)
            // nullify hidden items. we need the index so a filter would not work
            .map((item) => {
                if (+localStorage.getItem('mode') === 1 && (item.dont || item.done)) {
                    return null;
                }
                return item;
            })
            // Now we want to create a new Slide for this item
            .forEach((item, index) => this.itemToSlide(item, index + 1));
    }

    /**
     * @description
     * Creates a new Slide at the end of the slider with a incrementing week number and "???" as text
     */
    private static appendDummySlide() {
        if (this.sliderInstance.realIndex < this.sliderInstance.slides.length - 1) {
            // Only append new dummy slides if the user nearly reached the end
            return;
        }
        this.itemToSlide({text: '???', emoji: ''}, this.sliderInstance.slides.length + 1)
        this.sliderInstance.update();
    }

    /**
     * @description
     * Transforms a item into a slider element
     * @param item
     * @param index
     */
    private static itemToSlide(item: Item | null, index: number) {
        if (item === null) {
            return;
        }
        const kw = Element.createElement('div', 'kw');
        const text = Element.createElement('div', 'text');
        text.innerHTML = item.text;
        if (item.done) {
            kw.innerText = `${index <= 0 ? 1 : index}. Woche ✅`;
            text.classList.add('done');
        } else if (item.dont) {
            kw.innerText = `${index <= 0 ? 1 : index}. Woche ❎`;
            text.classList.add('done');
        } else {
            kw.innerText = `${index <= 0 ? 1 : index}. Woche ${item.emoji}`;
        }
        // animate the slide if it has an emoji
        if (item.emoji !== '') {
            kw.classList.add('animated');
            text.classList.add('animated');
        }
        const container = Element.createElement('div', 'item-wrapper');
        const slide = Element.createElement('div', 'swiper-slide');
        container.append(kw, text);
        slide.appendChild(container);

        document.querySelector('[data-wrapper]').appendChild(slide);
    }
}
