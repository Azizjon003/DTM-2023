// const axios = require("axios");
const fs = require("fs");
// const qs = require("querystring");
// // const axios = require("axios");

// async function sendRequest() {
//   const data = new URLSearchParams();
//   data.append("name", "");
//   data.append("region", "5");
//   data.append("university", "305");
//   data.append("faculty", "60730100");
//   data.append("edLang", "0");
//   data.append(
//     "__RequestVerificationToken",
//     "CfDJ8B2eRvtN3BxLpcL7NU_ZAUsqOfOy0ctFQO12e40loSUZchEvQs07EjxOxORbkYgrC1wc44pcJzRAZXFKo4oXE04qKd6vT_hvAa22TiaA6hN1NaYHEZQcm_NqOsASA4YgR0XoupI-D5jYW-rfTO3_DTM"
//   );

//   const headers = {
//     "Content-Type": "application/x-www-form-urlencoded",
//     Accept:
//       "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//     "Accept-Encoding": "gzip, deflate, br",
//     "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uz;q=0.6",
//     "Cache-Control": "max-age=0",
//     Connection: "keep-alive",
//     Cookie:
//       ".AspNetCore.Culture=c%3Duz%7Cuic%3Duz; .AspNetCore.Antiforgery.bnDOLbEMdVI=CfDJ8B2eRvtN3BxLpcL7NU_ZAUuJG7DoE4Me0s3Q6br8iQ48ri3tPH9iacOdvsreMgXnJ5brLIujxSuIE3VXbKSiVTVZHyK84f603_1oTXlXitKSATGE5T2fC84QwuQ3ng90iTGdPmPRDhsbpbxt8LG5Jjk",
//     Host: "mandat.uzbmb.uz",
//     Origin: "https://mandat.uzbmb.uz",
//     Referer: "https://mandat.uzbmb.uz/Home2023/Index",
//     "Sec-Ch-Ua":
//       '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
//     "Sec-Ch-Ua-Mobile": "?0",
//     "Sec-Ch-Ua-Platform": '"Linux"',
//     "Sec-Fetch-Dest": "document",
//     "Sec-Fetch-Mode": "navigate",
//     "Sec-Fetch-Site": "same-origin",
//     "Sec-Fetch-User": "?1",
//     "Upgrade-Insecure-Requests": "1",
//     "User-Agent":
//       "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
//   };

//   const apiUrl = "https://mandat.uzbmb.uz/Home2023/AfterFilter";
//   const requestData = qs.stringify(data);

//   let res = await axios.post(apiUrl, requestData, { headers });
//   fs.writeFileSync("data.html", res.data);
// }

// sendRequest();

const axios = require("axios");
// const { send } = require("process");
// const { sendRequest } = require("selenium-webdriver/http");

// // const data = new URLSearchParams();
// let headers = {
//   "Content-Type": "application/x-www-form-urlencoded",
//   Accept:
//     "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//   "Accept-Encoding": "gzip, deflate, br",
//   "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uz;q=0.6",
//   "Cache-Control": "max-age=0",
//   Connection: "keep-alive",
//   Cookie:
//     ".AspNetCore.Culture=c%3Duz%7Cuic%3Duz; .AspNetCore.Antiforgery.bnDOLbEMdVI=CfDJ8B2eRvtN3BxLpcL7NU_ZAUuJG7DoE4Me0s3Q6br8iQ48ri3tPH9iacOdvsreMgXnJ5brLIujxSuIE3VXbKSiVTVZHyK84f603_1oTXlXitKSATGE5T2fC84QwuQ3ng90iTGdPmPRDhsbpbxt8LG5Jjk",
//   Host: "mandat.uzbmb.uz",
//   Origin: "https://mandat.uzbmb.uz",
//   Referer: "https://mandat.uzbmb.uz/Home2023/Index",
//   "Sec-Ch-Ua":
//     '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
//   "Sec-Ch-Ua-Mobile": "?0",
//   "Sec-Ch-Ua-Platform": '"Linux"',
//   "Sec-Fetch-Dest": "document",
//   "Sec-Fetch-Mode": "navigate",
//   "Sec-Fetch-Site": "same-origin",
//   "Sec-Fetch-User": "?1",
//   "Upgrade-Insecure-Requests": "1",
//   "User-Agent":
//     "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
// };
// // data.append("name", "");
// // data.append("region", "5");
// // data.append("university", "305");
// // data.append("faculty", "60730100");
// // data.append("edLang", "0");
// // data.append(
// //   "__RequestVerificationToken",
// //   "CfDJ8B2eRvtN3BxLpcL7NU_ZAUsqOfOy0ctFQO12e40loSUZchEvQs07EjxOxORbkYgrC1wc44pcJzRAZXFKo4oXE04qKd6vT_hvAa22TiaA6hN1NaYHEZQcm_NqOsASA4YgR0XoupI-D5jYW-rfTO3_DTM"
// // );

// let data = {
//   name: "",
//   region: "5",
//   university: "305",
//   faculty: "60730100",
//   edLang: "0",
//   __RequestVerificationToken:
//     "CfDJ8B2eRvtN3BxLpcL7NU_ZAUsqOfOy0ctFQO12e40loSUZchEvQs07EjxOxORbkYgrC1wc44pcJzRAZXFKo4oXE04qKd6vT_hvAa22TiaA6hN1NaYHEZQcm_NqOsASA4YgR0XoupI-D5jYW-rfTO3_DTM",
// };
// axios
//   .post("https://mandat.uzbmb.uz/Home2023/AfterFilter", data, { headers })
//   .then((response) => {
//     // console.log('Javob:', response.data);
//     fs.writeFileSync("data.html", response.data);
//   })
//   .catch((error) => {
//     console.error("Xato yuz berdi:", error);
//   });

const requestDtm = async (region, university, faculty) => {
  // const data = new URLSearchParams();
  let headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uz;q=0.6",
    "Cache-Control": "max-age=0",
    Connection: "keep-alive",
    Cookie:
      ".AspNetCore.Culture=c%3Duz%7Cuic%3Duz; .AspNetCore.Antiforgery.bnDOLbEMdVI=CfDJ8B2eRvtN3BxLpcL7NU_ZAUuJG7DoE4Me0s3Q6br8iQ48ri3tPH9iacOdvsreMgXnJ5brLIujxSuIE3VXbKSiVTVZHyK84f603_1oTXlXitKSATGE5T2fC84QwuQ3ng90iTGdPmPRDhsbpbxt8LG5Jjk",
    Host: "mandat.uzbmb.uz",
    Origin: "https://mandat.uzbmb.uz",
    Referer: "https://mandat.uzbmb.uz/Home2023/Index",
    "Sec-Ch-Ua":
      '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Linux"',
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
  };
  let data = {
    name: "",
    region: region,
    university: university,
    faculty: faculty,
    edLang: "0",
    __RequestVerificationToken:
      "CfDJ8B2eRvtN3BxLpcL7NU_ZAUsqOfOy0ctFQO12e40loSUZchEvQs07EjxOxORbkYgrC1wc44pcJzRAZXFKo4oXE04qKd6vT_hvAa22TiaA6hN1NaYHEZQcm_NqOsASA4YgR0XoupI-D5jYW-rfTO3_DTM",
  };
  let res = await axios.post(
    "https://mandat.uzbmb.uz/Home2023/AfterFilter",
    data,
    { headers }
  );
  // fs.writeFileSync("data.html", res.data);
  return res.data;
};

const sendPagination = async (region, university, faculty, page) => {
  let url = `https://mandat.uzbmb.uz/Home2023/AfterFilter?page=${page}&region=${region}&university=${university}&faculty=${faculty}&edLang=0&nog=False&muy=False&soldier=False&iiv=False&prez=0&notC=0&bans=0&covid=0&olis=False&xq5=False&sortorder=ResultDesc`;
  let headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uz;q=0.6",
    "Cache-Control": "max-age=0",
    Connection: "keep-alive",
    Cookie:
      ".AspNetCore.Culture=c%3Duz%7Cuic%3Duz; .AspNetCore.Antiforgery.bnDOLbEMdVI=CfDJ8B2eRvtN3BxLpcL7NU_ZAUuJG7DoE4Me0s3Q6br8iQ48ri3tPH9iacOdvsreMgXnJ5brLIujxSuIE3VXbKSiVTVZHyK84f603_1oTXlXitKSATGE5T2fC84QwuQ3ng90iTGdPmPRDhsbpbxt8LG5Jjk",
    Host: "mandat.uzbmb.uz",
    Origin: "https://mandat.uzbmb.uz",
    Referer: "https://mandat.uzbmb.uz/Home2023/Index",
    "Sec-Ch-Ua":
      '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Linux"',
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
  };
  const body = {
    __RequestVerificationToken:
      "CfDJ8B2eRvtN3BxLpcL7NU_ZAUsqOfOy0ctFQO12e40loSUZchEvQs07EjxOxORbkYgrC1wc44pcJzRAZXFKo4oXE04qKd6vT_hvAa22TiaA6hN1NaYHEZQcm_NqOsASA4YgR0XoupI-D5jYW-rfTO3_DTM",
  };

  const res = await axios.post(url, body, {
    headers,
  });
  fs.writeFileSync("data.html", res.data);
  return res.data;
};
sendPagination(2, 420, 60230101, 5);

module.exports = {
  sendPagination,
  requestDtm,
};
