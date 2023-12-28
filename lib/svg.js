//creates SVG class with text and shape elements
class SVG {
    constructor() {
        this.textElement="";
        this.shapeElement="";
    }
    //renders SVG
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }
    //sets text
    setText(message, color) {
        if (message.length > 3) {
          throw new Error("Text must not exceed 3 characters.");
        }
        this.textElement = `<text x="100" y="125" font-size="55" text-anchor="middle" fill="${color}">${message}</text>`;
      }
    //sets shape
      setShape(shape) {
        this.shapeElement = shape.render();
      }
}


module.exports = SVG;
