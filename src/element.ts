export class Element {
    public static createElement(tagName: string, cssClass?: string) {
        const element = document.createElement(tagName);
        if (typeof cssClass === 'string') {
            element.classList.add(cssClass);
        }
        return element;
    }
}