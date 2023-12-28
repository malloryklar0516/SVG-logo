const {Circle, Square, Triangle} = require('./shapes');
//tests Circle SVG
describe ('Circle', () => {
    test('this should render an SVG for a red circle', ()=> {
        const expectedShape= `<circle cx="100" cy="100" r="80"  fill="red" stroke-width="5"/>`
        const circle = new Circle();
        circle.setColor("red");
        const actualShape = circle.render();
        expect(actualShape).toEqual(expectedShape);
    });
    });
    //tests square SVG
    describe ('Square', () => {
        test('this should render an SVG for a red square element', ()=> {
            const expectedShape= `<rect x="20" y="20" width="180" height="180" fill="red" stroke-width="5"/>`
            const square = new Square();
            square.setColor("red");
            const actualShape = square.render();
            expect(actualShape).toEqual(expectedShape);
        });
        });
        //tests Triangle SVG
        describe ('Triangle', () => {
            test('this should render an SVG for a red triangle element', ()=> {
                const expectedShape= ` <polygon points="0, 200 100, 0 200, 200", 200 50" fill="red" stroke-width="5"/>`
                const triangle = new Triangle();
                triangle.setColor("red");
                const actualShape = triangle.render();
                expect(actualShape).toEqual(expectedShape);
            });
            });
        
