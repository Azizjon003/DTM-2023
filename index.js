const fs = require("fs");
const parsing = require("./newParsing");
const main = async (name, i) => {
  let data = fs.readFileSync(`${name}.json`, "utf8");
  data = JSON.parse(data);
  const region = data.regionId;

  let university = data.universities;
  // console.log(university);
  // for (let i = 0; i < university.length; i++) {
  let faculty = university[i].faculties;
  for (let j = 0; j < faculty.length; j++) {
    try {
      console.log("Boshlandi : ");
      parsing(
        region,
        university[i].value,
        faculty[j].value,
        faculty[j].text,
        university[i].text
      )
        .then(() => {
          console.log("Bo'ldi : ");
        })
        .catch((e) => {
          console.log(e);
          console.log("Xatolik : Dasturda xatolik bor ");
        });
      console.log(`Bo'ldi : ${university[i].text}  ${faculty[j].text} `);
    } catch (e) {
      console.log(`Xatolik : ${university[i].text}  ${faculty[j].text} `);
    }
  }
};

const errorArray = async (name, i, arr) => {
  let data = fs.readFileSync(`${name}.json`, "utf8");
  data = JSON.parse(data);
  const region = data.regionId;

  let university = data.universities;
  console.log(university);

  // for (let i = 0; i < university.length; i++) {
  let faculty = university[i].faculties;
  for (let j = 0; j < arr.length; j++) {
    try {
      console.log("Boshlandi : ");
      parsing(
        region,
        university[i].value,
        arr[j],
        faculty[j].text,
        university[i].text
      )
        .then(() => {
          console.log("Bo'ldi : ");
        })
        .catch((e) => {
          console.log("Xatolik : Dasturda xatolik bor ");
        });
      console.log(`Bo'ldi : ${university[i].text}  ${faculty[j].text} `);
    } catch (e) {
      console.log(`Xatolik : ${university[i].text}  ${faculty[j].text} `);
    }
  }
};
main("region3", 1);
