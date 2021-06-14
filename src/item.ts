/**
 * @description
 * The interface of a single item in the slider.
 * Every item needs an emoji and a text.
 * The item can also optionally marked as "done" or "dont".
 */
export class Item {
    emoji: string;
    text: string;
    done?: boolean;
    dont?: boolean;
}
