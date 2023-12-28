# SVG-logo

## Description

Command line tool to generate an SVG logo and write it to a file. prompts user to pick shape, logo text, and shape and text colors for the logo, and then generates the logo and writes it to a logo.svg file.

## User story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Usage
- run npm i to install node packages / dependencies
-  run node index.js to start the SVG logo application
- you will be prompted with questions relating to the creation of your logo
- logo.svg will be written in the working directory
- run tests with npm run test

## Link to video demo
https://drive.google.com/file/d/1nU0H2JuzL5ii3JQLLVK-HVL9FaIN4Yyf/view

## license

MIT

## Contributors

Mallory Klar
