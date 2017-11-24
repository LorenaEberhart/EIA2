/*
Aufgabe: Aufgabe 6 - Inheritance: Polymorphe Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var A6;
(function (A6) {
    class Sonne extends A6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            A6.ski.beginPath();
            A6.ski.arc(this.x, this.y, 15, 0, 3 * Math.PI);
            A6.ski.fillStyle = "yellow";
            A6.ski.fill();
            A6.ski.strokeStyle = "yellow";
            A6.ski.stroke();
        }
        move() {
            if (this.x > 800) {
                this.x = 20;
            }
            this.x += 1;
            this.y += 0;
        }
    }
    A6.Sonne = Sonne;
})(A6 || (A6 = {}));
//# sourceMappingURL=Sonne.js.map