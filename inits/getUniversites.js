const axios = require("axios");
const fs = require("fs");

const ishla = async () => {
  let arr = [];
  for (let i = 2; i <= 14; i++) {
    const data = await axios.get(
      `https://mandat.uzbmb.uz/Home2023/GetUniversities?regionID=${i}`
    );
    arr.push(data.data);
  }
  fs.writeFileSync("data/universities.json", JSON.stringify(arr));
};

ishla();
