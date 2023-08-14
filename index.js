const fs = require("fs");
const parsing = require("./newParsing");
const main = async (name) => {
  let data = fs.readFileSync(`${name}.json`, "utf");
  data = JSON.parse(data);
  const region = data.regionId;

  let university = data.universities;

  for (let i = 0; i < university.length; i++) {
    let faculty = university[i].faculties;
    for (let j = 0; j < university[i].length; j++) {
      try {
        parsing(region, university[i].value, faculty[j].value).catch((e) => {
          console.log("Xatolik : Dasturda xatolik bor ");
        });
        console.log(`Bo'ldi : ${university[i].text}  ${faculty[j].text} `);
      } catch (e) {
        console.log(`Xatolik : ${university[i].text}  ${faculty[j].text} `);
      }
    }
  }
};

main();
