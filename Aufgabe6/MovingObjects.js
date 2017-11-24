/*
Aufgabe: Aufgabe 6 - Inheritance: Polymorphe Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var A6;
(function (A6) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //wird für jedes Objekt einzeln gefüllt
        }
        move() {
            //wird für jedes Objekt einzeln gefüllt
        }
    }
    A6.MovingObjects = MovingObjects;
})(A6 || (A6 = {}));
//# sourceMappingURL=MovingObjects.js.map