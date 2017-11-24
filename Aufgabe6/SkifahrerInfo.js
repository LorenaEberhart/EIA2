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
    class SkifahrerInfo extends A6.MovingObjects {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y);
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        move() {
            this.x += 2; //Geschwindigkeit
            this.y += 2;
            if (this.x > 800) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }
        draw() {
            //Körper
            A6.ski.beginPath();
            A6.ski.fillStyle = this.color;
            A6.ski.fillRect(this.x, this.y, 5, -30);
            //Kopf
            A6.ski.beginPath();
            A6.ski.arc(this.x + 3, this.y - 30, 8, 0, 3 * Math.PI);
            A6.ski.fillStyle = this.color;
            A6.ski.fill();
            //Skier
            A6.ski.stroke();
            A6.ski.moveTo(this.x + 30, this.y + 10);
            A6.ski.lineTo(this.x - 10, this.y - 2);
            A6.ski.strokeStyle = this.color;
            A6.ski.stroke();
        }
    }
    A6.SkifahrerInfo = SkifahrerInfo;
})(A6 || (A6 = {}));
//# sourceMappingURL=SkifahrerInfo.js.map