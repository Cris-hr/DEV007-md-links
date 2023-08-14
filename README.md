![md-links](https://github.com/Cris-hr/DEV007-md-links/blob/main/imgReadme/md-imag.png)

# Markdown Links

## Índice

- [1. Resumen del proyecto](#1-resumen-del-proyecto)
- [2. Planificación](#2-planificación)
- [3. Diagrama de flujo](#3-diagrama-de-flujo)
- [4. Guia de uso e instalación de la biblioteca](#4-guia-de-uso-e-instalación-de-la-biblioteca)
- [5. Archivos del proyecto](#5-archivos-del-proyecto)
- [6. Documentación técnica de la biblioteca](#6-documentación-técnica-de-la-biblioteca)
- [7. Trabajo en equipo](#7-trabajo-en-equipo)
- [8. Checklist](#8-checklist)

---

## 1. Resumen del proyecto

Dentro de la comunidad, nos han propuesto crear una herramienta usando el entorno
de ejecución Node.js que permita leer y analizar archivos
en formato Markdown, para verificar los links que contengan y reportar
algunas estadísticas.
La herramienta debe permitir verificar si la ruta existe, verificar si la ruta encontrada
es absoluta om relativa, en caso sea ruta relativa la debe convertir a absoluta, verificar
si es un archivo .md y leer el archivo para luego extraer todos los links que encuentre
para poder validarlos y reportar estadísticas.
El proyecto implica la creación de una biblioteca de JavaScript personalizada.

## 2. Planificación

El proyecto se desarrolló en 4 sprints, y la planificación y seguimiento se realizó utilizando la
herramienta trello, como se muestra a continuación:

![Trello](https://github.com/Cris-hr/DEV007-md-links/blob/main/imgReadme/trello1.jpeg)
![Trello](https://github.com/Cris-hr/DEV007-md-links/blob/main/imgReadme/trello2.jpeg)

## 3. Diagrama de flujo

![Diagra-de-flujo](https://github.com/Cris-hr/DEV007-md-links/blob/main/imgReadme/diagramaDeFlujo.png)

## 4. Guía de uso e instalación de la biblioteca

##### `Instalación`

Para instalar la biblioteca, siga estos pasos:

1. Abre la terminal de tu sistema operativo.

2. Navegue hasta el directorio raíz de su proyecto o la ubicación donde desea instalar la biblioteca.

3. Ejecute el siguiente comando en la terminal para instalar la biblioteca desde el registro del paquete npm:

npm i cris-ch-md-links

Una vez completada la instalación, puede importar y usar la biblioteca en su proyecto de acuerdo con las instrucciones de uso proporcionadas en la guía de uso.

Siguiendo estos pasos, habrá instalado la biblioteca en su proyecto y podrá comenzar a usarla para realizar las tareas deseadas.

Instrucciones de uso:

El ejecutable de la herramienta se utiliza de la siguiente manera a través de la terminal:

mdLinks <path-to-file> [options]

## 5. Archivos del proyecto

![Boilerplate](https://github.com/Cris-hr/DEV007-md-links/blob/main/imgReadme/boilerplate.jpeg)

- `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos.
- `index.js`: En este archivo se implementa la lógica para entregarb los resultados
  del código de acuerdo con la solkicitud del usuario.
- `functions.js`: Desde este archivo se debe exportar las funciones creadas.
- `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...), main, bin
- `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
- `.eslintrc` con configuración para linter. Este archivo contiene una
  configuración básica para ESLint, si deseas agregar reglas adicionales
  como Airbnb deberás modificar este archivo.
- `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
- `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Su implementación debe pasar estos tests.

## 6. Documentación técnica de la biblioteca

Markdown es un lenguaje de marcado ligero muy popular entre los desarrolladores.
Se usa mucho en varias plataformas que manejan texto sin formato (como GitHub, foros,
blogs, etc.), y es muy común encontrar varios archivos en este formato en cualquier
repositorio, comenzando con el tradicional README.md.

Estos archivos de Markdown normalmente contienen links que muchas veces están rotos
o no son válidos y eso perfudica mucho el valor de la información que se quiere compartir.

El objetivo de esta herramienta de línea de comandos (CLI) es verificar archivos .md y verificar si contienen enlaces mientras indica si estos enlaces son válidos o no.

## Este proyecto consta de DOS partes

##### JavaScript API

El módulo debe poder **importarse** en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
  Si la ruta pasada es relativa, debe resolverse como relativa al directorio
  desde donde se invoca node - _current working directory_.
- `options`: Un objeto con **únicamente** la siguiente propiedad:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función debe **retornar una promesa** (`Promise`) que **resuelva a un arreglo**
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades

Con `validate:false` :

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.

![Validate-false](https://github.com/Cris-hr/DEV007-md-links/blob/main/imgReadme/sin-options.jpeg)

Con `validate:true` :

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.
- `status`: Código de respuesta HTTP.
- `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

![Validate-true](https://github.com/Cris-hr/DEV007-md-links/blob/main/imgReadme/con-validate.jpeg)

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

![Validate](https://github.com/Cris-hr/DEV007-md-links/blob/main/imgReadme/con-validate.jpeg)

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

![Stats](https://github.com/Cris-hr/DEV007-md-links/blob/main/imgReadme/con-stats.jpeg)

##### `--validate y --stats`

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

![Validate-Stats](https://github.com/Cris-hr/DEV007-md-links/blob/main/imgReadme/con-validate-stats.jpeg)

## 7. Trabajo en equipo

Crsilda Huayra - Front End Developer

## 8. Checklist

### General

- [✔] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

- [✔] Un board con el backlog para la implementación de la librería.
- [✔] Documentación técnica de la librería.
- [✔] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

- [✔] El módulo exporta una función con la interfaz (API) esperada.
- [✔] Implementa soporte para archivo individual
- [✔] Implementa `options.validate`

### INDEX

- [✔] Implementa `--validate`
- [✔] Implementa `--stats`

### Pruebas / tests

- [✔] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
- [✔] Pasa tests (y linters) (`npm test`).
