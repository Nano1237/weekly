import {Swiper} from 'swiper';
import {appendSlideToSlider, createSlideElement} from "./create-slides";


export function createSlider(initialSlide: number) {
    let swiper = new Swiper('[data-container]', {
        initialSlide: initialSlide,
        slidesPerView: 1,
        init: false,
        keyboard: {
            enabled: true
        },
    });
    swiper.on('init', appendDummySlide);
    swiper.on('slideChange', appendDummySlide);
    (swiper as any).init();

    function appendDummySlide() {
        if (typeof swiper === 'undefined') {
            return;
        }
        if (swiper.realIndex >= swiper.slides.length - 1) {
            appendSlideToSlider(createSlideElement({
                index: swiper.slides.length + 1,
                emoji: ''
            }, '???'));
            swiper.update();
        }
    }
}
