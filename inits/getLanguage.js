const axios = require("axios");

const getLanguage = async (id) => {
  const data = await axios.get(
    `https://mandat.uzbmb.uz/Home2023/GetLanguages?facultyID=${id}`
  );
  return data.data;
};
