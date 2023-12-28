const inquirer = require('inquirer');
const SVG = require('./svg');
const {Circle, Square, Triangle} = require('./shapes');
const {writeFile} = require('fs/promises'); // check 
//prompts user to answer questions relating to logo
class CLI {
    run() {
        return inquirer 
        .prompt([
            {
                name: "text",
                type: "input",
                message: "Enter text for the logo. (Maxmimum 3 characters)",
                validate: (text) => 
                text.length <=  3 || "your message must contain 3 characters or less. Please re-enter."
            }, 
            {
                name: "txtColor",
                type: "input",
                message: "Enter a color for your text",
            },
            {
                name: "logoShape",
                type: "list",
                message: "select the shape for your logo",
                choices: ["circle", "square", "triangle"]
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter the fill color for the logo shape"
            }
        ])
        .then (({ text, txtColor, logoShape, shapeColor
        }) => {
            let shape; 
            switch (logoShape) {
                case "circle":
                    shape = new Circle();
                    break;
                case "square":
                    shape = new Square();
                    break;
                default: 
                shape = new Triangle();
                break;
            }
        shape.setColor(shapeColor);
        const svg = new SVG();
        svg.setText(text, txtColor);
        svg.setShape(shape);
        //writes the logo to logo.svg file
        return writeFile("logo.svg", svg.render());
        })
        //logs that the logo was generated
        .then ( () => {
            console.log("Generated your logo in logo.svg");
        })
        .catch((error)=> {
            console.log(error); 
            console.log ("Error. Try again!")
        });
  
    }
}
module.exports = CLI; 