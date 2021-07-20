/**
 * @description
 * The interface of a single item in the slider.
 * Every item needs an emoji and a text.
 * The item can also optionally marked as "done" or "dont".
 */
export class Item {
    /**
     * The emoji(s) that should be shown next to the date
     */
    emoji: string;
    /**
     * The description of the item
     */
    text: string;
    /**
     * True if the Item was done (checkmark will be shown)
     */
    done?: boolean;
    /**
     * True if the Item was discarded (cross will be shown)
     */
    dont?: boolean;
}
