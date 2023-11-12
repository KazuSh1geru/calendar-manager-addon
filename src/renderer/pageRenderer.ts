interface PageRenderer<T> {
    renderPage(): GoogleAppsScript.Card_Service.Card;
}

abstract class BasePageRenderer<T> implements PageRenderer<T> {
    constructor (
        protected rootCard: GoogleAppsScript.Card_Service.CardBuilder = CardService.newCardBuilder()
    ) {}
    renderPage(args?: T): GoogleAppsScript.Card_Service.Card {
        try {
            const sections = this.renderSections(args);
            sections.forEach(section => this.rootCard.addSection(section));
            return this.rootCard.build();
        } catch (error) {
            throw error;
        }
    }
    protected abstract renderSections(args?: T): GoogleAppsScript.Card_Service.CardSection[];
    // protected onOpen(args?: T): void {}
}