import {items} from "./items";

export function createSlides() {
    const end = new Date();
    const weekNow = weeksBetween(new Date('2020-08-27'), end);
    const untilIndex = (weekNow <= 0 ? 0 : weekNow); // @todo: get current kw
    items.slice(0, untilIndex + 1).map((item, index) => {
        return createSlideElement({
            index: index + 1,
            emoji: item.emoji
        }, item.text, true);
    }).forEach((element) => appendSlideToSlider(element));

    return untilIndex;
}

export function appendSlideToSlider(slide: any) {
    document.querySelector('[data-wrapper]').appendChild(slide);
}

export function createSlideElement(headline: any, body: string, animated: boolean = false) {
    const kw = createElement('div', 'kw');
    kw.innerText = `${headline.index <= 0 ? 1 : headline.index}. Woche ${headline.emoji}`;
    const text = createElement('div', 'text');
    text.innerHTML = body;
    if (animated) {
        kw.classList.add('animated');
        text.classList.add('animated');
    }
    const container = createElement('div');
    const slide = createElement('div', 'swiper-slide');
    container.append(kw, text);
    slide.appendChild(container);
    return slide;
}

/**
 * @description
 * Returns the passed weeks between two dates
 * @param d1
 * @param d2
 * @returns {number}
 */
function weeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}

function createElement(tagName: string, cssClass?: string) {
    const element = document.createElement(tagName);
    if (typeof cssClass === 'string') {
        element.classList.add(cssClass);
    }
    return element;
}