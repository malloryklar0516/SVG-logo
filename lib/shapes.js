//creates shape class that applies to all shapes
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}
//creates Circle class in Shape class
class Circle extends Shape {
    render(){
        return `<circle cx="100" cy="100" r="80"  fill="${this.color}" stroke-width="5"/>`
    }
}
//creates square class in shape class

class Square extends Shape {
    render(){
        return `<rect x="20" y="20" width="180" height="180" fill="${this.color}" stroke-width="5"/>`
    }
}
//Creates square class in shape class
class Triangle extends Shape {
    render(){
        return ` <polygon points="0, 200 100, 0 200, 200", 200 50" fill="${this.color}" stroke-width="5"/>`
    }

}
module.exports = {Circle, Square, Triangle}