const { By } = require("selenium-webdriver");
const facultyTarget = require("./facultyTarget");

const universitesTarget = async (driver, u, f) => {
  const element4 = await driver.findElement(
    By.id("select2-UniversityID-container")
  );

  console.log(await element4.getText());
  await element4.click();

  const element6 = await driver.findElement(
    By.id("select2-UniversityID-results")
  );
  const element5 = await element6.findElements(By.tagName("li"));
  await driver.sleep(5000);
  for (let i = 0; i < element5.length; i++) {
    if (i === u) {
      const text = await element5[i].getText();
      console.log("text: ", text);
      await element5[i].click();
      await driver.sleep(5000);
      await facultyTarget(driver, f);
    }
  }
};

module.exports = universitesTarget;
