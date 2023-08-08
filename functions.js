const fs = require("fs");
const path = require("path");

const verificarRuta = (ruta) => {
  return fs.existsSync(ruta);
};

const rutaAbsoluta = (ruta) => {
  if (!path.isAbsolute(ruta)) {
    return path.resolve(ruta);
  } else {
    return ruta;
  }
};

const extencionRuta = (ruta) => {
  return path.extname(ruta);
};
module.exports = { verificarRuta, rutaAbsoluta, extencionRuta };
