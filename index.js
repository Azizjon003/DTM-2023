const fs = require("fs");
const parsing = require("./newParsing");
const main = async () => {
  let data = fs.readFileSync("index.json", "utf");
  data = JSON.parse(data);
  const region = data.regionId;

  let university = data.universities;

  for(let i = 0;i<university.length,i++)
  {
    let faculty = university[i].faculties
    for(let j = 0;j<university[i].length;j++){
    await  parsing(region,university[i].value,faculty[j].value)
      console.log(`Bo'ldi : ${university[i].text}  ${faculty[j].text} `)

    }
  }
};


main()