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
    class CostaRicaInfo extends Abschluss.FlagsArray {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.draw();
        }
        draw() {
            //erster Streifen
            Abschluss.crc2.fillStyle = "#08298A";
            Abschluss.crc2.fillRect(this.x, this.y, 200, 25);
            //Zwischenstreifen
            Abschluss.crc2.fillStyle = "white";
            Abschluss.crc2.fillRect(this.x, this.y + 25, 200, 25);
            //zweiter Streifen
            Abschluss.crc2.fillStyle = "#DF0101";
            Abschluss.crc2.fillRect(this.x, this.y + 50, 200, 50);
            //Zwischenstreifen
            Abschluss.crc2.fillStyle = "white";
            Abschluss.crc2.fillRect(this.x, this.y + 100, 200, 25);
            //dritter Streifen
            Abschluss.crc2.fillStyle = "#08298A";
            Abschluss.crc2.fillRect(this.x, this.y + 125, 200, 25);
        }
    }
    Abschluss.CostaRicaInfo = CostaRicaInfo;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=CostaRica.js.map