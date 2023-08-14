const { requestDtm, sendPagination } = require("./open");
const cheerio = require("cheerio");
const fs = require("fs");
const Student = require("./db/models/student");
const getData = (html) => {
  // console.log(html);
  const $ = cheerio.load(html);

  let page = $('[style="background-color: #bee5eb;"]')
    .text()
    .split("Joriy sahifadagi ma'lumotlar soni: ")[1]
    .split("|")[0]
    .trim();

  // console.log(page);
  // table.val();

  let arr = [];
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

    let data = {
      full_name,
      student_code,
      student_uuid,
    };
    // console.log(data);
    arr.push(data);
  }
  // table.each((table, tr) => {
  //   console.log($(tr).val());
  // });
  // console.log(arr);
  return arr;
};

const parsing = async (
  region,
  university,
  faculty,
  faculties,
  universities
) => {
  const base = await requestDtm(region, university, faculty);
  const $ = cheerio.load(base);
  let page = $('[style="background-color: #bee5eb;"]')
    .text()
    .split("Barcha topilgan ma'lumotlar soni:")[1]
    .split("Konkurs:")[0]
    .trim();
  let isPage = page;
  let data = [];
  console.log(page);
  if (!(Number(page) >= 11)) {
    let nimadir = getData(base);
    data.push(...nimadir);
  }

  page = Math.ceil(Number(page) / 10);

  for (let i = 1; i <= page; i++) {
    try {
      let html = await sendPagination(region, university, faculty, i);
      let datacha = getData(html);
      data.push(...datacha);
    } catch (e) {
      console.log(e);
      console.log(
        "Xatolik : Dasturda xatolik bor ",
        region,
        university,
        faculty
      );
    }
  }

  console.log(
    "Talabalar Soni: ",
    data.length,
    isPage,
    `${universities}-${faculties}`
  );
  fs.writeFileSync(
    `init/${region}/${universities}-${faculties}.json`,
    JSON.stringify(data)
  );
};

const ishla = async () => {
  let data = fs.readFileSync("data.html", "utf-8");
  getData(data);
};
ishla();

module.exports = parsing;
// regionID=1
