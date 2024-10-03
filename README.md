# HTML Project

## Some features

- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- GSAP: A JavaScript library for creating high-performance animations that work in every major browser.
- Husky: Format the code with `Eslint` & `Prettier` on pre-commit and check the commit message with `Commitlint`

## Required (or Recommended) Tools

- Node.js: >=20.15.1
- IDE: Visual Studio Code (VS Code)

## Architecture Overview

Current Package Structure and Future Ideal Structure

```tree
.
├── src - The main directory containing all source code for the project
│   ├── assets - This folder holds all the asset files used in the project, such as images, JavaScript files, and CSS files.
│   │   ├── images - A directory for storing all image files.
│   │   ├── javascripts - Contains all JavaScript files.
│   │   │   ├── gsap.min.js - A minified version of the GreenSock Animation Platform library (version 3.12.5) used for animations.
│   │   │   └── main.js - The main JavaScript file where the core JavaScript logic of the project resides.
│   │   └── stylesheets - Contains all CSS files.
│   │       ├── dist - A subdirectory for storing build (or compiled) CSS files by Tailwind CSS.
│   │       │   └── main.css - The main compiled CSS file that has been processed (e.g., minified or combined).
│   │       └── main.css - The main CSS file where the core styles of the project are written.
│   ├── pages - This directory contains all additional HTML pages apart from the main entry point.
│   └── index.html - This file is the main HTML page for the project, serving as the entry point.
├── eslint.config.js - Configuration file for ESLint, a tool for identifying and fixing problems in JavaScript code.
├── .prettierrc - Configuration file for Prettier, a code formatter that helps maintain consistent code style.
└── tailwind.config.js - Configuration file for Tailwind CSS, a utility-first CSS framework. This file customizes the default Tailwind setup.
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Install the project dependencies by running `npm install`.
3. Run package script start command to watch build Tailwind CSS `npm run start`.
4. Open the `src/index.html` file in your web browser to view the project. You can also use a development server in VS Code to view the project:
   - Open the `src/index.html` file in VS Code.
   - Right-click on the HTML file and select `Open with Live Server`.
   - The project will open in your default web browser.
