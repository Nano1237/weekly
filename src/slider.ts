// @ts-ignore
import {Swiper} from 'swiper';
import {items} from './items';
import {Element} from './element';
import {Item} from './item';
import {DateTime} from './date-time';

/**
 * The main app functionality is implemented in this class.
 */
export class Slider {
    /**
     * A local property containing the Swiper instance to be accessble across the static methods.
     */
    private static sliderInstance: Swiper;
    /**
     * This property contains the week number that is currently shown and thous also the last week entry visible for the user
     *
     * The date from which the slider output calculation should start.
     * For every week beginning with this date a new item will be shown.
     *
     * The 28. August 2020 was a Sunday.
     * Every Sunday after that, a new item will be shown.
     * If the new entry should be shown at any other day of the week, the date has to be adjusted accordingly.
     */
    private static readonly currentWeek: number = DateTime.getCurrentWeekNumber(new Date('2020-08-23'));
    /**
     * @description
     * This index is used to create the dummy slides with the corect week number.
     * If items are hidden, a wrong slider number will be genereated and thus a wrong week number at the new position.
     */
    private static dummySlideIndex: number = null;
    /**
     * @description
     * This boolean is updates when the slider has appended the last slide if the user already seen all entries.
     */
    private static lastSlideAppended: boolean;

    /**
     * @description
     * Creates a new Slider instance
     */
    public static create(): void {
        this.addHideListener();
        this.sliderInstance = new Swiper('[data-container]', {
            initialSlide: this.currentWeek,
            slidesPerView: 1,
            init: false,
            keyboard: {
                enabled: true
            },
        });
        this.sliderInstance.on('init', () => this.appendDummySlide());
        this.sliderInstance.on('slideChange', () => this.appendDummySlide());
        this.reRenderSlider();
        this.sliderInstance.init();
    }

    /**
     * @description
     * The user can switch between items marked as done and all items.
     * This method registers the event listener of the switch.
     * @private
     */
    private static addHideListener(): void {
        const modeElement = document.getElementById('mode') as HTMLInputElement;
        if (+localStorage.getItem('mode') === 1) {
            modeElement.click();
        }
        modeElement.addEventListener('change', function () {
            localStorage.setItem('mode', (+this.checked).toString());
            window.location.reload();
        });
    }

    /**
     * @description
     * Clears all slide elements and creates new slides for all items inside the 'items' constant
     */
    public static reRenderSlider(): void {
        this.getDataWrapper().innerHTML = '';
        this.getItemsOrdered()
            // We only want the elements until the current week. discard other pls.
            .slice(0, this.currentWeek)
            // nullify hidden items. we need the index so an array filter would not work
            .map(item => {
                if (+localStorage.getItem('mode') === 1 && (item.dont || item.done)) {
                    return null;
                }
                return item;
            })
            // Now we want to create a new Slide for this item
            .forEach((item, index) => this.itemToSlide(item, index + 1));
    }

    /**
     * Returns the global items array ordered by the 'order' property of the items
     */
    private static getItemsOrdered(): Item[] {
        return items
            // Add an order of infinity if not already provided
            .map(item => {
                if (typeof item.order === 'undefined') {
                    item.order = Infinity;
                }
                return item;
            })
            // sort the items based by their order
            .sort((a, b) => {
                return a.order > b.order ? 1 : (b.order > a.order) ? -1 : 0;
            });
    }

    /**
     * @description
     * Creates a new Slide at the end of the slider with a incrementing week number and '???' as text
     */
    private static appendDummySlide(): void {
        if (this.dummySlideIndex === null) {
            this.dummySlideIndex = this.currentWeek;
        }
        // Appends the last slide if the current week exceeds the amount of entries.
        // also stop the slider from appending additional '???' items
        if (this.currentWeek >= items.length) {
            if (!this.lastSlideAppended) {
                this.itemToSlide({text: 'Das war es erst einmal mit Einträgen ...', emoji: ''}, ++this.dummySlideIndex)
                this.lastSlideAppended = true;
                this.sliderInstance.update();
            }
            return;
        }
        // Only append new dummy slides if the user nearly reached the end
        if (this.sliderInstance.realIndex < this.sliderInstance.slides.length - 1) {
            return;
        }
        this.itemToSlide({text: '???', emoji: ''}, ++this.dummySlideIndex)
        this.sliderInstance.update();
    }

    /**
     * @description
     * Transforms a item into a slider element
     * @param item
     * @param index
     */
    private static itemToSlide(item: Item | null, index: number): void {
        // Skip nullified items (caused by the hidden switch for done/dont items)
        if (item === null) {
            return;
        }
        const cw = Element.createElement('div', 'kw');
        const text = Element.createElement('div', 'text');
        text.innerHTML = item.text;
        this.setCalenderWeek(item, text, cw, index);
        // animate the slide if it has an emoji
        if (item.emoji !== '') {
            cw.classList.add('animated');
            text.classList.add('animated');
        }

        this.addHtmlToSlider(cw, text);
    }

    /**
     * @description
     * Appends the calendar week and the text item to the slider
     * @param calendarWeekElement
     * @param textElement
     */
    private static addHtmlToSlider(calendarWeekElement: HTMLElement, textElement: HTMLElement): void {
        const container = Element.createElement('div', 'item-wrapper');
        container.append(calendarWeekElement, textElement);
        const slide = Element.createElement('div', 'swiper-slide');
        slide.appendChild(container);
        this.getDataWrapper().appendChild(slide);
    }

    /**
     * @description
     * Sets the calendar week of the passed item either as the correct week incl. emoji, or as done or dont
     * @param item
     * @param text
     * @param cw
     * @param index
     */
    private static setCalenderWeek(item: Item, text: HTMLElement, cw: HTMLElement, index: number): void {
        // If the item is not done or dont, set the passed icon. otherwise the done/dont empji and a done class
        if (!item.done && !item.dont) {
            return this.setCalendarWeekContent(cw, index, item.emoji);
        }
        this.setCalendarWeekContent(cw, index, item.done ? '✅' : '❎');
        text.classList.add('done');
    }

    /**
     * @description
     * Writes the content to the passed calendar week element
     * @param calendarWeekElement
     * @param index
     * @param icon
     */
    private static setCalendarWeekContent(calendarWeekElement: HTMLElement, index: number, icon: string): void {
        calendarWeekElement.innerText = `${index <= 0 ? 1 : index}. Woche ${icon}`;
    }

    /**
     * @description
     * Returns the wrapper element containing all slides
     */
    private static getDataWrapper(): HTMLElement {
        return document.querySelector('[data-wrapper]');
    }
}
