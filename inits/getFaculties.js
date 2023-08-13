const axios = require("axios");
const fs = require("fs");
const getFaculty = async (id) => {
  const data = await axios.get(
    `https://mandat.uzbmb.uz/Home2023/GetFaculties?universityID=${id}`
  );
  return data.data;
};

const ishla = async () => {
  const data = JSON.parse(fs.readFileSync("data/universities.json"));
  for (let i = 0; i < data.length; i++) {
    let arr = [];
    for (let j = 0; j < data[i].length; j++) {
      console.log(i, " ", j);
      console.log(data[i][j].text);
      const faculty = await getFaculty(data[i][j].value);
      fs.writeFileSync(
        `data/faculties/faculties-${data[i][j].text}.json`,
        JSON.stringify(faculty)
      );
      arr.push(faculty);
    }
  }
};

ishla();
