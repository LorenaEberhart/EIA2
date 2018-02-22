/*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 23.02.18
   
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var Abschluss;
(function (Abschluss) {
    class GermanyInfo extends Abschluss.FlagsArray {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.draw();
        }
        draw() {
            //erster Streifen
            Abschluss.crc2.fillStyle = "#000000";
            Abschluss.crc2.fillRect(this.x, this.y, 200, 50);
            //zweiter Streifen
            Abschluss.crc2.fillStyle = "#dd0000";
            Abschluss.crc2.fillRect(this.x, this.y + 50, 200, 50);
            //dritter Streifen
            Abschluss.crc2.fillStyle = "#ffce00";
            Abschluss.crc2.fillRect(this.x, this.y + 100, 200, 50);
        }
    }
    Abschluss.GermanyInfo = GermanyInfo;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Germany.js.map