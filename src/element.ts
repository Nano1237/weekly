/**
 * A simple helper-class containing methods for element specific things.
 * This could also be replaced by a namespace or a function export.
 */
export class Element {
    /**
     * @description
     * Shorthand method for element creation with pre-set class
     * @param tag   the type of element that should be created
     * @param token css class that should be pre-set to the element
     */
    public static createElement(tag: string, token?: string): HTMLElement {
        const element = document.createElement(tag);
        if (typeof token === 'string') {
            element.classList.add(token);
        }
        return element;
    }
}
