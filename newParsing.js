const { requestDtm, sendPagination } = require("./open");
const cheerio = require("cheerio");
const fs = require("fs");
const Student = require("./db/models/student");
const getData = async (html) => {
  // console.log(html);
  const $ = cheerio.load(html);

  let page = $('[style="background-color: #bee5eb;"]')
    .text()
    .split("Joriy sahifadagi ma'lumotlar soni: ")[1]
    .split("|")[0]
    .trim();

  console.log(page);
  // table.val();

  for (let i = 2; i <= Number(page) + 1; i++) {
    const table = $(".table").find(`tr:nth-child(${i})`);
    const student = table
      .text()
      .trim()
      .split("\n")
      .map((el) => el.trim());

    // console.log(student);
    const student_code = student[0];
    const full_name = student[1];
    const uuid = $(table).find("td:last-child a").attr("href");
    if (!uuid) {
      continue;
    }
    let student_uuid = "https://mandat.uzbmb.uz" + uuid;

    try {
      await Student.create({
        full_name,
        student_code,
        student_uuid,
      });
    } catch (e) {
      console.log("Xatolik");
    }
  }
  // table.each((table, tr) => {
  //   console.log($(tr).val());
  // });
};

const parsing = async (region, university, faculty) => {
  const base = await requestDtm(region, university, faculty);
  const $ = cheerio.load(base);
  let page = $('[style="background-color: #bee5eb;"]')
    .text()
    .split("Barcha topilgan ma'lumotlar soni:")[1]
    .split("Konkurs:")[0]
    .trim();
  if (!(Number(page) >= 11)) {
    await getData(base);
  }

  page = Math.ceil(Number(page) / 10);

  for (let i = 1; i <= page; i++) {
    let html = await sendPagination(region, university, faculty, i);
    await getData();
  }
};

const ishla = async () => {
  let data = fs.readFileSync("data.html", "utf-8");
  await getData(data);
};
// ishla();

module.exports = parsing;
// regionID=1
