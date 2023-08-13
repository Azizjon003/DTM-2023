const { By } = require("selenium-webdriver");
const languageTarget = require("./languageTarget");

const facultyTarget = async (driver, f) => {
  const element7 = await driver.findElement(
    By.id("select2-FacultyID-container")
  );

  await element7.click();

  const element8 = await driver.findElement(By.id("select2-FacultyID-results"));
  const element9 = await element8.findElements(By.tagName("li"));
  await driver.sleep(2000);
  console.log(element9.length);
  for (let i = 0; i < element9.length; i++) {
    const text = await element9[i].getText();
    if (i === f) {
      console.log("Fakultet: ", text);
      await element9[i].click();
      break;
    }
  }
};

module.exports = facultyTarget;
