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
      //PracticeFormPage.welp();
    });
  });
});