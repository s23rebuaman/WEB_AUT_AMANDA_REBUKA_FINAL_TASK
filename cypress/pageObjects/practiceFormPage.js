import { BasePage } from "./basePage";

export class PracticeFormPage extends BasePage{
    static get url() {
        return "/#/automation-practice-form";
    }

    static get firstName() {
        return cy.get('#firstName');
    }

    static get lastName() {
        return cy.get('#lastName');
    }

    static get userEmail() {
        return cy.get('#userEmail');
    }

    static get gender() {
        return cy.get('#gender-radio-2');
    }

    static get userMobileNumber() {
        return cy.get('#userNumber');
    }

    static get birthDate() {
        return cy.get('#dateOfBirthInput');
    }

    static get birthYear() {
        return cy.get('[class="react-datepicker__year-select"]');
    }

    static get birthMonth() {
        return cy.get('[class="react-datepicker__month-select"]');
    }

    static get birthDay(){
        return cy.get('[class="react-datepicker__day react-datepicker__day--018"]');
    }

    static get subjects(){
        return cy.get('[class="subjects-auto-complete__control css-13cymwt-control"]');
    }
    
    static get economicsSubject(){
        return cy.get('#react-select-2-listbox');
    }

    static get hobbies(){
        return cy.get('#hobbies-checkbox-3');
    }

    static get picture(){
        return cy.get('#uploadPicture');
    }
    //cy.get('input[type=file]').selectFile('file.json')
    static get selectPicture(){
        return cy.get('#uploadPicture').selectFile('C:\\Users\\Dators\\Downloads\\web_automation\\WEB_AUT_AMANDA_REBUKA_FINAL_TASK\\cypress\\files\\meme cat.png');
    }

    static get address(){
        return cy.get('#currentAddress');
    }

    static get state(){
        return cy.get('[class="css-13cymwt-control"]');
    }
    
    static get stateNCR(){
        return cy.get('#react-select-3-option-0');
    }

    static get city(){
        return cy.get('[class="css-13cymwt-control"]');
    }
    
    static get cityDelhi(){
        return cy.get('#react-select-4-option-0');
    }

    static get submitButton(){
        return cy.get('#submit');
    }

    static get studentName(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]').find('td').eq(1);
    }

    static get studentEmail(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]').find('td').eq(3);
    }

    static get studentGender(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]').find('td').eq(5);
    }

    static get studentMobile(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]').find('td').eq(7);
    }

    static get studentBirthday(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]').find('td').eq(9);
    }

    static get studentSubjects(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]').find('td').eq(11);
    }

    static get studentHobbies(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]').find('td').eq(13);
    }

    static get studentPicture(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]').find('td').eq(15);
    }

    static get studentAddress(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]').find('td').eq(17);
    }

    static get studentStateAndCity(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]').find('td').eq(19);
    }
}