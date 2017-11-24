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
    class Schnee extends A6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            A6.ski.beginPath();
            A6.ski.arc(this.x, this.y, 2.5, 0, 2 * Math.PI);
            A6.ski.strokeStyle = "white";
            A6.ski.stroke();
            A6.ski.fillStyle = "white";
            A6.ski.fill();
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += Math.random();
            this.y += Math.random();
        }
    }
    A6.Schnee = Schnee;
})(A6 || (A6 = {}));
//# sourceMappingURL=Schnee.js.map