# README

- [1. Para qué es este repo?](#1-para-qué-es-este-repo)
- [3. Especificaciones del ejericicio](#3-especificaciones-del-ejericicio)
  - [3.1. Monta tu entorno de desarrollo](#31-monta-tu-entorno-de-desarrollo)
- [4. Pre-requisitos](#4-pre-requisitos)
- [5. Lo que se pretende aprender de este ejercicio](#5-lo-que-se-pretende-aprender-de-este-ejercicio)
- [6. Antes de ponerte a trabajar](#6-antes-de-ponerte-a-trabajar)
  - [6.1. Haz un fork del repositorio original](#61-haz-un-fork-del-repositorio-original)
  - [6.2. Clona el repositorio en tu máquina de trabajo](#62-clona-el-repositorio-en-tu-máquina-de-trabajo)
  - [6.3. Crea tu rama (personal) de trabajo o release branch](#63-crea-tu-rama-personal-de-trabajo-o-release-branch)
  - [6.4. Crea tu rama de equipo (solo si se te indica en clase)](#64-crea-tu-rama-de-equipo-solo-si-se-te-indica-en-clase)
- [7. Revisa periódicamente si se han producido actualizaciones en las especificaciones](#7-revisa-periódicamente-si-se-han-producido-actualizaciones-en-las-especificaciones)
- [8. Documenta tu trabajo](#8-documenta-tu-trabajo)
- [9. Cuándo termines tu trabajo... o eso crees](#9-cuándo-termines-tu-trabajo-o-eso-crees)
  - [9.1. Etiqueta tu versión](#91-etiqueta-tu-versión)
- [10. Estrategia de ramificación](#10-estrategia-de-ramificación)
  - [10.1. Changelog de enunciado](#101-changelog-de-enunciado)
  - [10.2. Snapshot actual del enunciado](#102-snapshot-actual-del-enunciado)
- [11. Guía de contribución](#11-guía-de-contribución)
- [12. Con quién hablar y cómo sobre este repo](#12-con-quién-hablar-y-cómo-sobre-este-repo)

## 1. Para qué es este repo?

Este repositorio plantea una actividad para poner en práctica los fundamentos de javascript, gestión de eventos, manipulación del DOM entre otras cuestiones.

## 3. Especificaciones del ejericicio

En esta ocasión los requerimientos del ejercicicio se realizarán en la forma de especificación de *hitos* descritos en el fichero que encontraras en [`doc/Hitos.md`](doc/Hitos.md). Trata de realizarlos uno a uno y en orden y etiqueta su resolución tal y como se indica en [la especificación de la documentación](/doc/README.md).

### 3.1. Monta tu entorno de desarrollo

Puedes utizar el editor de texto para editar los scripts que más te convenga aunque se recomienda usar VSCode como IDE.

Asegúrate de tener instalado:

- [Node js](https://nodejs.org/en/) en su versión `14.15.5` o superior
- Git

## 4. Pre-requisitos

Como requisitos previos se asumen nociones de programación en ES6.

- Selección de herramientas de programación
- Compresión de código HTML y CSS
- Declaración de variables. Tipo y ámbito.
- Uso de funciones. Principio de Reutilización del Código
- Manejo de colecciones de datos
- Estructuras básicas de control
- Bucles
- Operadores Aritmético-lógicos
- POO

## 5. Lo que se pretende aprender de este ejercicio

- Practicar con colecciones aplicando los conocimientos adquiridos en el desarrollo de un juego totalmente funcional.
- Practicar con el manejor del DOM
- Practicar el control de eventos que produce la interacción de un usuario con la aplicación.
- Programación basada en prototipado

## 6. Antes de ponerte a trabajar

### 6.1. Haz un fork del repositorio original

Haz un fork del repositorio original y **configúralo de forma privada** (la actividad propuesta es individual ;)
Habilita las issues y **otorga permisos de escritura al profesor** en tu repo.

> **Muy importante**: el usuario del profesor en el servicio web de control de versiones se te indicará en el curso. Asegúrate que es el correcto y que el profesor te lo ha facilitado.

### 6.2. Clona el repositorio en tu máquina de trabajo

```bash
git clone <url de tu fork>
```

### 6.3. Crea tu rama (personal) de trabajo o release branch

Crea tu propia rama de trabajo! Crea una nueva rama a partir de `master` que se llame como el nombre de tu usuario en el curso (este nombre de usuario se te facilitará en clase). Te recuerdo cómo:

```bash
git checkout -b <rb-usuario>
```

**Esta será tu *release branch* a partir de ahora.**

La evolución de tu solución final (si no estás trabajando en equipo) deberá estar apuntada por esta rama. Puedes utilizar todas las ramas que quieras, pero **no trabajes en la master** y asegúrate, si tienes otras ramas que forman parte de tu solución, de combinarlas con tu rama con el nombre de tu usuario.

**No modifiques** ningún fichero `README.md`. Estos ficheros están reservados para especificaciones. Si los modificas, quizá luego te sea más complicado integrarte nuevas versiones del profesor cuando actualice las especificaciones o se corrijas erratas.

### 6.4. Crea tu rama de equipo (solo si se te indica en clase)

Crea una rama para tu equipo! Si se te indica en clase que puedes trabajar en grupo, utiliza esta rama para integrar todo el trabajo tuyo y de tus compañeros. En este caso, la evolución de tu solución final (la tuya y la de tu equipo, será la misma), será la apuntada por esta rama.

## 7. Revisa periódicamente si se han producido actualizaciones en las especificaciones

Cada vez que retomes tu trabajo asegúrate tener la última versión de las especificaciones. Para ello:

1. (**Sólo la primera vez**) Añade como repo remoto el repo del profesor desde el que has creado tu fork.

    `git remote add profesor <url-repoProfesor>`

2. (**Cada vez que retomes trabajo**) Revisa novedades y obtenlas del repo del profesor

    `git fetch profesor master`

3. (**Cada vez que haya novedades**) Mezcla estas novedades con tu *release branch*. Si has seguido las indicaciones de este README no deberían producirse conflictos. Si se produjesen adviértelo al profesor.

```bash
    # Asegúrate primero de estar en tu release branch
    git checkout rb-usuario
    
    # Después mézclate en tu rama actual las novedades
    git merge profesor/master
```

## 8. Documenta tu trabajo

El repo debe contener una carpeta nombrada como `doc`. [Sigue las instrucciones](doc/README.md) de cómo documentar.

## 9. Cuándo termines tu trabajo... o eso crees

### 9.1. Etiqueta tu versión

Puedes crear las etiquetas que quieras. Por ejemplo, cuando tengas un revisión de tu código que consideres estable, etiquétala de la forma que te indique el [mecanismo de versionado](doc/README.md). Modifica tambien el [changelog](doc/changelog.md) indicando las novedades de la versión.

Puede que haya ocasiones en las que se te pida que crees una etiqueta con un formato muy concreto, cuando por ejemplo completes un hito en el desarrollo de tu aplicación que deba ser revisado. Respeta y sé muy estricto con el formato que se te pide.

Puedes hacer etiquetado de tu último commit de la siguiente manera:

```bash
# Si quieres hacer una etiqueta ligera (solo nombrar un commit
git tag <etiqueta>

# Si quieres hacer una etiqueta que contenga más información
git tag -a <etiqueta> -m 'El mensaje'
```

Si quieres poner una etiqueta a un commit anterior, pon su checksum al final de las instrucciones anteriores.

**Recuerda enviar tus tags a tus repos remotos de la siguiente manera:**

```bash
git push <remoto> <tag>
```

Consulta esta [fuente](https://git-scm.com/book/es/v2/Fundamentos-de-Git-Etiquetado) para más detalles.

## 10. Estrategia de ramificación

Rama | Uso
---- | -------------
`master` | Evolución del enunciado del ejercicio
`remote\rb-usuario` | Evolución de la solución de cada alumno
`remote\rb-teamA..B..C`| Evolución de la solución de cada equipo
`solucion-A..B..C` | Rama que representa una solución (puede derivar de master u otra rama)
`examen01` | Rama donde se plantea un ejercicio de examen sobre este software.

### 10.1. Changelog de enunciado

Se irán etiquetando enunciados consolidados y entregados a alumnos. Se dará una explicación general de cada cambio :

Tag | Descripción
--- | -------------
`enum-v0.1.0` | Hito1
`enum-v0.2.0` | Hito2

### 10.2. Snapshot actual del enunciado

```Shell
.
├── README.md
├── doc
│   ├── Hitos.md
│   ├── Notas.md
│   ├── README.md
│   ├── Work.md
│   ├── changelog.md
│   ├── img
│   │   ├── 01-baraja-barajada.png
│   │   ├── 01-baraja-desplegada.png
│   │   └── 02-juego-escoba-repartido.png
│   └── res
│       └── des-sprites.py
└── src
    ├── 01-baraja-desplegada.html
    ├── 02-repartir-escoba.html
    └── assets
        ├── css
        │   ├── 01-style.css
        │   └── 02-style.css
        ├── img
        │   ├── Baraja_española_completa.png
        │   └── cartas
        └── js
            ├── 01-desplegar-baraja.js
            ├── 02-repartir-escoba.js
            └── underscore-min.js

9 directories, 18 files
```

Nota: Nivel de recursividad 4 (`tree -L 4`)

## 11. Guía de contribución

- Escribiendo tests
- Revisión de código

## 12. Con quién hablar y cómo sobre este repo

Siguiendo este orden de preferencia:

- Issue Tracking
- agrasar@iessanclemente.net
