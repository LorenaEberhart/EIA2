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
    class GambiaInfo extends Abschluss.FlagsArray {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.draw();
        }
        draw() {
            //erster Streifen
            Abschluss.crc2.fillStyle = "#DF0101";
            Abschluss.crc2.fillRect(this.x, this.y, 200, 45);
            //Zwischenstreifen
            Abschluss.crc2.fillStyle = "white";
            Abschluss.crc2.fillRect(this.x, this.y + 45, 200, 7.5);
            //zweiter Streifen
            Abschluss.crc2.fillStyle = "#08298A";
            Abschluss.crc2.fillRect(this.x, this.y + 52.5, 200, 45);
            //Zwischenstreifen
            Abschluss.crc2.fillStyle = "white";
            Abschluss.crc2.fillRect(this.x, this.y + 97.5, 200, 7.5);
            //dritter Streifen
            Abschluss.crc2.fillStyle = "#0B610B";
            Abschluss.crc2.fillRect(this.x, this.y + 105, 200, 45);
        }
    }
    Abschluss.GambiaInfo = GambiaInfo;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Gambia.js.map