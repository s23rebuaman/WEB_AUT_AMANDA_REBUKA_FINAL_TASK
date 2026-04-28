const { FormsPage } = require("../pageObjects/formsPage");
const { HomePage } = require("../pageObjects/homePage");
const { PracticeFormPage } = require("../pageObjects/practiceFormPage");

describe("Demoqa scenario", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
    });

    it("Make an Appointment", () => {
      // Click Forms card
      HomePage.formsCard.click();
      // Click Practice form option
      FormsPage.practiceForm.click();
      // Input all the necessary information in the text fields,
      // buttons, etc, where it is not stated otherwise.
      PracticeFormPage.firstName.type('Amanda');
      PracticeFormPage.lastName.type('Rebuka');
      PracticeFormPage.userEmail.type('amanda@example.com');
      PracticeFormPage.gender.click();
      PracticeFormPage.userMobileNumber.type('1029384756');
      PracticeFormPage.birthDate.click();
      PracticeFormPage.birthYear.select('1930');
      PracticeFormPage.birthMonth.select('February');
      PracticeFormPage.birthDay.click();
      // ! ! ! Vajadzēja DevTools console rakstīt "setTimeout(() => { debugger; }, 5000);", ! ! !
      // ! ! ! lai paspētu atrast list objektu selectors, savādāk tie uzreiz aizvērās       ! ! !
      PracticeFormPage.subjects.type('Economics');
      PracticeFormPage.economicsSubject.click();
      PracticeFormPage.hobbies.click();
      PracticeFormPage.picture.click();
      PracticeFormPage.selectPicture;
      PracticeFormPage.address.type('Example address 123');
      PracticeFormPage.state.type('NCR');
      PracticeFormPage.stateNCR.click();
      PracticeFormPage.city.type('Delhi');
      PracticeFormPage.cityDelhi.click();
      PracticeFormPage.submitButton.click();
      // Validate that each Labeled row contains the correct information.
      PracticeFormPage.studentName.should('contain.text','Amanda Rebuka');
      PracticeFormPage.studentEmail.should('contain.text','amanda@example.com');
      PracticeFormPage.studentGender.should('contain.text','Female');
      PracticeFormPage.studentMobile.should('contain.text','1029384756');
      // ! ! ! izvēlējos citu datums, jo kodu rakstu 28.datumā, un tāpēc tas datums jau ! ! !
      // ! ! ! ir izvēlēts un tāpēc tas man veido problēmas kodā                        ! ! !
      PracticeFormPage.studentBirthday.should('contain.text','18 February,1930');
      PracticeFormPage.studentSubjects.should('contain.text','Economics');
      PracticeFormPage.studentHobbies.should('contain.text','Music');
      PracticeFormPage.studentPicture.should('contain.text','C:\\Users\\Dators\\Downloads\\web_automation\\WEB_AUT_AMANDA_REBUKA_FINAL_TASK\\cypress\\files\\meme cat.png');
      PracticeFormPage.studentAddress.should('contain.text','Example address 123');
      PracticeFormPage.studentStateAndCity.should('contain.text','NCR Delhi');
    });
  });
});