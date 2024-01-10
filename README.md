# Viña Picoteo - Entregable Front End
***
### Tabla de Contenido
***
1. [Información General](#info-general)
2. [Tecnologías](#tecnologias)
3. [Instalación](#instalacion)
4. [Problemas conocidos](#problemas-conocidos)
***
### Información General
***
Viña Picoteo es el proyecto de desarrollo de sitio web de e-commerce realizado por el grupo 3 "Naciones Unidas" en el marco de los Bootcamps de desarrollo UX/UI, Front End y Back End impartidos por la Escuela de Posgrado y Educación Continua de la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile en 2023.

Se trata de un e-commerce centrado en vinos y snacks cuya oferta de valor consiste en un sistema de suscripciones para la compra de cajas de productos preseleccionados, con curatoría por expertos en maridaje, para proveer una experiencia sensorial única. También es posible comprar productos individualmente, así como registrarse para publicar comentarios y opiniones. 

En una etapa futura, considera la creación de una comunidad y la publicación de material educativo relacionado con la cultura del vino y los snacks, el desarrollo de eventos, talleres, etc.

En la actualidad, el sitio se ecuentra en desarrollo, y debe considerarse la presente iteración como un "work in progress", pasible de numerosas mejoras que resuelvan bugs y falencias.

## Tecnologías
***
Algunas tecnologías utilizadas en el proyecto:
* [Vite](https://vitejs.dev/) como entorno de desarrollo 
* [NodeJS](https://nodejs.org/en) como entorno de ejecución
* [GIT](https://git-scm.co) como control de versiones
* [Visual Studio Code](https://code.visualstudio.com/) como IDE
* [React](https://es.react.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/) para control de estados
* [Formik](https://formik.org/) para creación de formularios
* [yup](https://www.npmjs.com/package/yup) para validación de formularios
* [json-server](https://www.npmjs.com/package/json-server) servidor backend local para pruebas
* HTML, CSS y numerosas librerías para funcionalidades específicas

## Instalación
***
En su actual etapa de desarrollo, la aplicación se ejecuta sobre un servidor local. Faltan desarrollar e implementar  funcionalidades antes de ejecutar el comando Build para empaquetarla.
```
$ git clone https://github.com/aulagnero/PicoteoFinalCopia.git
$ cd ../path/to/the/file
$ npm install
$ npm install json-server
$ json-server --watch db.json
$ npm run dev
```
## Problemas conocidos
***
El sitio presenta algunos comportamientos que serán resueltos en próximas iteraciones:
* Aleatoriamente los iconos de Usuario y Carro de compras en el menú superior no se cargan.
* Aleatoriamente los iconos de RRSS y la imagen de fondo en el footer no se cargan.
* En la página de productos individuales, las fotos de los autores de los comentarios no se cargan.
* En la página de productos individuales, el icono del botón "Carro de compras" de las tarjetas de producto no se cargan, aunque el botón es funcional.
