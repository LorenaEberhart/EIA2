/*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 13.10.17
   
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var Abschluss;
(function (Abschluss) {
    class JapanInfo extends Abschluss.FlagsArray {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.draw();
        }
        draw() {
            //Hintergrund
            Abschluss.crc2.fillStyle = "white";
            Abschluss.crc2.fillRect(this.x, this.y, 200, 150);
            //Kreis
            Abschluss.crc2.beginPath();
            Abschluss.crc2.arc(675, 100, 40, 0, 2 * Math.PI);
            Abschluss.crc2.fillStyle = "#DF0101";
            Abschluss.crc2.fill();
        }
    }
    Abschluss.JapanInfo = JapanInfo;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Japan.js.map