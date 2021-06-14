export class Element {
    /**
     * @description
     * Shorthand method for element creation with pre-set class
     * @param tagName
     * @param cssClass
     */
    public static createElement(tagName: string, cssClass?: string) {
        const element = document.createElement(tagName);
        if (typeof cssClass === 'string') {
            element.classList.add(cssClass);
        }
        return element;
    }
}
