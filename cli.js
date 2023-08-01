// importamos la funcion mdLinks desde el archivo index.js
const { mdLinks } = require("./index.js");

const relativePath = process.argv[2];
const statsOption = process.argv.includes("--stats");
const validateOption = process.argv.includes("--validate");

mdLinks(relativePath, { stats: statsOption, validate: validateOption });
//.then((result) => console.log(result))
//.catch((error) => console.log(error));
console.log(relativePath);
