import { BasePage } from "./basePage";

export class FormsPage extends BasePage{
    static get url() {
        return "/#/forms";
    }

    static get practiceForm() {
        return cy.get('[class="element-group"]').eq(1).find("#item-0");
    }
}