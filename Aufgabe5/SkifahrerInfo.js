/*
Aufgabe: Aufgabe 5 - Classes: Objektorientierte Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var A5;
(function (A5) {
    class SkifahrerInfo {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
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
            A5.ski.beginPath();
            A5.ski.fillStyle = this.color;
            A5.ski.fillRect(this.x, this.y, 5, -30);
            //Kopf
            A5.ski.beginPath();
            A5.ski.arc(this.x + 3, this.y - 30, 8, 0, 3 * Math.PI);
            A5.ski.fillStyle = this.color;
            A5.ski.fill();
            //Skier
            A5.ski.stroke();
            A5.ski.moveTo(this.x + 30, this.y + 10);
            A5.ski.lineTo(this.x - 10, this.y - 2);
            A5.ski.strokeStyle = this.color;
            A5.ski.stroke();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A5.SkifahrerInfo = SkifahrerInfo;
})(A5 || (A5 = {}));
//# sourceMappingURL=SkifahrerInfo.js.map