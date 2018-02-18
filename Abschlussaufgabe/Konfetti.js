/*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var Abschluss;
(function (Abschluss) {
    class Konfetti {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.move();
        }
        draw() {
            Abschluss.crc2.beginPath();
            Abschluss.crc2.arc(this.x, this.y, 2.5, 0, 2 * Math.PI);
            Abschluss.crc2.strokeStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            Abschluss.crc2.stroke();
            Abschluss.crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            Abschluss.crc2.fill();
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
    Abschluss.Konfetti = Konfetti;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Konfetti.js.map