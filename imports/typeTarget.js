const { By } = require("selenium-webdriver");

const educationTarget = async (driver) => {
  const element13 = await driver.findElement(
    By.id("select2-EducTypeID-container")
  );

  await element13.click();

  const element14 = await driver.findElement(
    By.id("select2-EducTypeID-results")
  );

  const element15 = await element14.findElements(By.tagName("li"));

  for (let i = 0; i < element15.length; i++) {
    const text = await element15[i].getText();

    console.log(text);
    if (i === 1) {
      await element15[i].click();
      break;
    }
  }
};

module.exports = educationTarget;
