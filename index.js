/*module.exports = () => {
  // ...
};
*/
//console.log(process.argv[2]);
/*
const path = require("path");
const mdLinks = () => {
  const relativePath = process.argv[2];
  const absolutePath = path.resolve(relativePath);

  console.log("RUTA RELATIVA: ", relativePath);
  console.log("RUTA ABSOLUTA: ", absolutePath);
};
mdLinks();
*/
const fs = require("fs");
const path = require("path");
//const parseMd = require("parse-md");

const mdLinks = (pathArgv, options) => {
  const relativePath = process.argv[2];
  const validateOption =
    process.argv.includes("--validate") || process.argv.includes("--v");
  //const statsOption = process.argv.includes("--stats");

  let userPath;
  //verificamos si la ruta existe o no
  if (fs.existsSync(relativePath)) {
    //console.log("La ruta SI existe");
  } else {
    console.log("NO se encontró una ruta");
  }
  //verificar si la ruta es absoluta o es relativa
  if (path.isAbsolute(relativePath) === false) {
    //si la ruta no es absoluta hay que convertirla a absoluta
    //convertir la ruta a absoluta
    userPath = path.resolve(relativePath);
    //console.log(userPath);
  } else {
    userPath = relativePath;
  }
  //Para saber la extencion de un archivo(si es MD o no)
  if (path.extname(userPath) === ".md") {
    //console.log("El archivo es un MD");

    //Para leer un archivo
    const texto = fs.readFileSync(userPath, "utf-8");
    //console.log(texto);
    const regExp = /\[(.*?)\]\((?!#)(.*?)\)/g;
    let result;
    let links = [];
    while ((result = regExp.exec(texto)) !== null) {
      let objet = {
        href: result[(0, 2)],
        text: result[(0, 1)],
        file: userPath,
      };
      links.push(objet);
    }
    if (validateOption) {
      //Aquí va la validación
      let arrayDePromesas = [];
      links.forEach((links) => {
        arrayDePromesas.push(fetch(links.href));
        //console.log(arrayDePromesas);
      });
      return Promise.all(arrayDePromesas)
        .then((responses) => {
          const results = responses.map((response, index) => {
            const link = links[index];
            return {
              href: link.href,
              text: link.text,
              file: link.file,
              status: response.status,
              ok: response.ok ? "ok" : "fail",
            };
          });
          console.log(results);
        })
        .catch((error) => {
          console.error("Error al realizar las peticiones HTTP:", error);
          return [];
        });
    } else {
      console.log(links);
    }
  } else {
    //console.log("El archivo NO es un MD");
    console.log("No lo puedo leer, no es archivo MD");
  }
};

mdLinks();

module.exports = {
  mdLinks,
};
