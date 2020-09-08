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
        items
            // We only want the elements until the current week
            .slice(0, this.currentSlideOfWeek)
            // Now we want to create a new Slide for this item
            .forEach((item, index) => this.itemToSlide(item, index + 1));
        (this.sliderInstance as any).init();
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
    private static itemToSlide(item: Item, index: number) {
        const kw = Element.createElement('div', 'kw');
        kw.innerText = `${index <= 0 ? 1 : index}. Woche ${item.emoji}`;
        const text = Element.createElement('div', 'text');
        text.innerHTML = item.text;

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