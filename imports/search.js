const { By } = require("selenium-webdriver");

const searchData = async (driver) => {
  await driver.findElement(By.id("nav-profile-tab")).click();

  const element = await driver.findElement(
    By.css('[aria-labelledby="select2-RegionID-container"]')
  );
  console.log(await element.getAttribute("aria-labelledby"));
  await driver.sleep(1000);

  // Elementni bosing
  await element.click();

  driver.sleep(1000);
};

module.exports = searchData;
