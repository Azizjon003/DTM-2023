const { By } = require("selenium-webdriver");

const targetRegion = async (driver, region) => {
  const element2 = await driver.findElement(By.id("select2-RegionID-results"));

  // console.log(await element2.getText());

  await driver.sleep(2000);

  const element3 = await element2.findElements(By.tagName("li"));

  console.log(element3.length);
  for (let i = 0; i < element3.length; i++) {
    const text = await element3[i].getText();
    if (text === region) {
      console.log("Viloyat", text);
      await element3[i].click();
      break;
    }
  }
};

module.exports = targetRegion;
