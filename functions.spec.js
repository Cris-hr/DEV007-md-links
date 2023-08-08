const { verificarRuta, rutaAbsoluta, extencionRuta } = require("./functions");

const routeRelative = "files";
const routeAbsolute = "C:\\Users\\HP\\DEV007-md-links\\files";

describe("rutaAbsoluta", () => {
  it("Debería retornar de una ruta relativa a absoluta", () => {
    expect(rutaAbsoluta(routeRelative)).toBe(routeAbsolute);
  });
  it("Deberia retornar una ruta absoluta", () => {
    expect(rutaAbsoluta("C:\\Users\\HP\\DEV007-md-links\\files")).toBe(
      "C:\\Users\\HP\\DEV007-md-links\\files"
    );
  });
});

describe("verificarRuta", () => {
  it("Deberia retornar la rura existente", () => {
    expect(verificarRuta("C:\\Users\\HP\\DEV007-md-links\\files")).toBe(true);
  });
  it("Deberia retornar false para una ruta que no existe", () => {
    try {
      verificarRuta("/v/c/holamundo.md");
    } catch (error) {
      expect(error).toBe(false);
    }
  });
});

describe("extencionRuta", () => {
  it("Deberia retornar que no es un archivo .md", () => {
    try {
      extencionRuta("./files/texto.txt");
    } catch (error) {
      expect(error).toBe("no es un archivo .md");
    }
  });
});
