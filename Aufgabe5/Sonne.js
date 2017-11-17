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
    class Sonne {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        drawSun() {
            A5.ski.beginPath();
            A5.ski.arc(this.x, this.y, 15, 0, 3 * Math.PI);
            A5.ski.fillStyle = "yellow";
            A5.ski.fill();
            A5.ski.strokeStyle = "yellow";
            A5.ski.stroke();
        }
        moveSun() {
            if (this.x > 800) {
                this.x = 20;
            }
            this.x += 1;
            this.y += 0;
        }
        updateSun() {
            this.drawSun();
            this.moveSun();
        }
    }
    A5.Sonne = Sonne;
})(A5 || (A5 = {}));
//# sourceMappingURL=Sonne.js.map