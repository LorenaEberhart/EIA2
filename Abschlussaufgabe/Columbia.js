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
    class ColumbiaInfo extends Abschluss.FlagsArray {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.draw();
        }
        draw() {
            //erster Streifen
            Abschluss.crc2.fillStyle = "#FACC2E";
            Abschluss.crc2.fillRect(this.x, this.y, 200, 75);
            //zweiter Streifen
            Abschluss.crc2.fillStyle = "#0404B4";
            Abschluss.crc2.fillRect(this.x, this.y + 75, 200, 37.5);
            //dritter Streifen
            Abschluss.crc2.fillStyle = "#B40404";
            Abschluss.crc2.fillRect(this.x, this.y + 112.5, 200, 37.5);
        }
    }
    Abschluss.ColumbiaInfo = ColumbiaInfo;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Columbia.js.map