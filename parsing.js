// test.js
const { Builder, By, Key, until } = require("selenium-webdriver");
const searchData = require("./imports/search");
const targetRegion = require("./imports/regionTarget");
const universitesTarget = require("./imports/universitesTarget");
const Student = require("./db/models/student");

// Chrome brauzerni ochish uchun WebDriver yaratamiz

// Saytga o'tish
async function exampleTest(region, u, f, qoldiq = 0) {
  try {
    let driver = new Builder().forBrowser("chrome").build();
    // Saytni ochamiz
    await driver.get("https://mandat.uzbmb.uz/Home2023/Index");

    // Sarlavhaga yozish
    await searchData(driver);
    await driver.sleep(1000);

    await targetRegion(driver, "Navoiy viloyati");
    await driver.sleep(1000);

    await universitesTarget(driver, u, f);
    const submit = await driver.findElement(By.id("Submit1"));

    await submit.click();

    await driver.sleep(2000);

    let html = await driver.findElement(By.className("page-link"));

    let htmlData = await html.getAttribute("formaction");

    let newHtml = htmlData.replace("page=1", `page=${qoldiq}`);

    console.log(newHtml);

    // await driver.executeScript(`document.body.innerHTML = '${newHtml}';`);

    await driver.executeScript(
      `arguments[0].setAttribute('formaction', '${newHtml}');`,
      html
    );

    // let bosspage = await driver.findElement(By.id("qoldiq"));

    await html.click();
    let pages = await driver.findElement(
      By.css('[style="background-color: #bee5eb;"]')
    );

    console.log(pages.length);

    let page = (await pages.getText())
      .split("Barcha topilgan ma'lumotlar soni:")[1]
      .split("Konkurs:")[0]
      .trim();

    page = Math.ceil(Number(page) / 10);
    page = Math.ceil(page / 2) - qoldiq;

    for (let j = 0; j < page; j++) {
      console.log("Hozirgi sahifa: ", j + 1);
      const trElements = await driver.findElements(By.css("table tr"));

      for (let i = 1; i < trElements.length; i++) {
        try {
          let student_code = (await trElements[i].getText()).split(" ")[0];
          let full_name =
            (await trElements[i].getText()).split(" ")[1] +
            " " +
            (await trElements[i].getText()).split(" ")[2] +
            " " +
            (await trElements[i].getText()).split(" ")[3];

          // console.log(fullname);
          // let tdElements;
          let tdElement5 = await trElements[i].findElement(
            By.css("td:nth-child(5)")
          );
          let td5Text = await tdElement5.getText();
          if (td5Text === "Test sinovlaridan chetlashtirilgan!") {
            continue;
          }

          let tdElements = await trElements[i].findElement(
            By.css("td:last-child a")
          );
          // const tdLocator = By.css("td:last-child a");
          // let tdElements = await findAndClickElement(driver, tdLocator);
          // Elementni topish va uni ishlash

          let student_uuid = (await tdElements.getAttribute("href")) || "null";
          try {
            await Student.create({
              student_code,
              full_name,
              student_uuid,
            });
          } catch (e) {
            // console.log(e);
          }
        } catch (e) {
          // console.log(e);
        }
      }
      const next = await driver.findElements(By.className("page-link"));

      for (let i = 0; i < next.length; i++) {
        const text = await next[i].getText();

        if (text === "Keyingi") {
          await next[i].click();
          break;
        }
      }

      if (j === page - 1) {
        exampleTest(region, u, f + 1);
      }
      console.log(await driver.getCurrentUrl());
      await driver.sleep(1000);
    }
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
  }
}

const pereviousTest = async (region, u, f, qoldiq = 0) => {
  try {
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("https://mandat.uzbmb.uz/Home2023/Index");

    // Sarlavhaga yozish
    await searchData(driver);
    await driver.sleep(1000);

    await targetRegion(driver, "Navoiy viloyati");
    await driver.sleep(5000);

    await universitesTarget(driver, u, f);
    const submit = await driver.findElement(By.id("Submit1"));

    await submit.click();

    await driver.sleep(2000);

    let pages = await driver.findElement(
      By.css('[style="background-color: #bee5eb;"]')
    );

    let page = (await pages.getText())
      .split("Barcha topilgan ma'lumotlar soni:")[1]
      .split("Konkurs:")[0]
      .trim();

    page = Math.ceil(Number(page) / 10);
    let html = await driver.findElement(By.className("page-link"));

    let htmlData = await html.getAttribute("formaction");

    let newHtml = htmlData.replace("page=1", `page=${page - qoldiq}`);

    console.log(newHtml);

    // await driver.executeScript(`document.body.innerHTML = '${newHtml}';`);

    await driver.executeScript(
      `arguments[0].setAttribute('formaction', '${newHtml}');`,
      html
    );

    html.click();

    // const next = await driver.findElements(By.className("page-link"));

    // for (let i = 0; i < next.length; i++) {
    //   let text = await next[i].getText();
    //   text = text.trim();
    //   if (text === "Oxirgi") {
    //     await next[i].click();
    //     break;
    //   }
    // }
    page = Math.ceil(page / 2) - qoldiq;

    console.log(page);
    await driver.sleep(2000);
    for (let j = 0; j < page; j++) {
      console.log("Hozirgi sahifa: ", j + 1);
      const trElements = await driver.findElements(By.css("table tr"));

      for (let i = 1; i < trElements.length; i++) {
        let student_code = (await trElements[i].getText()).split(" ")[0];
        let full_name =
          (await trElements[i].getText()).split(" ")[1] +
          " " +
          (await trElements[i].getText()).split(" ")[2] +
          " " +
          (await trElements[i].getText()).split(" ")[3];

        // console.log(fullname);
        // const tdLocator = By.css("td:last-child a");
        // let tdElements = await findAndClickElement(driver, tdLocator);
        let tdElement5 = await trElements[i].findElement(
          By.css("td:nth-child(5)")
        );
        let td5Text = await tdElement5.getText();
        if (td5Text === "Test sinovlaridan chetlashtirilgan!") {
          continue;
        }
        // console.log(await tdElement5.getText());

        let tdElements = await trElements[i].findElement(
          By.css("td:last-child a")
        );
        let student_uuid = (await tdElements.getAttribute("href")) || "null";
        try {
          await Student.create({
            student_code,
            full_name,
            student_uuid,
          });
        } catch (e) {
          // console.log(e);
        }
      }
      const next = await driver.findElements(By.className("page-link"));

      for (let i = 0; i < next.length; i++) {
        const text = await next[i].getText();

        if (text === "Oldingi") {
          await next[i].click();
          break;
        }
      }

      if (j === page - 1) {
        await pereviousTest(region, u, f + 1);
      }
      console.log(await driver.getCurrentUrl());
      await driver.sleep(1000);
    }
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
  }
};

const UniversalTarget = async (region, u, f, begin, end) => {
  let driver = new Builder().forBrowser("chrome").build();
  await driver.get("https://mandat.uzbmb.uz/Home2023/Index");

  // Sarlavhaga yozish
  await searchData(driver);
  await driver.sleep(1000);

  await targetRegion(driver, region);
  await driver.sleep(5000);

  await universitesTarget(driver, u, f);
  const submit = await driver.findElement(By.id("Submit1"));

  await submit.click();

  await driver.sleep(2000);
};
// Testni boshlaymiz
// exampleTest("Navoiy viloyati", 1, 1);
module.exports = { exampleTest, pereviousTest };
