/*
Aufgabe: Aufgabe 8 - DynHTML: RandomBoxes
Name: Lorena Eberhart
Matrikel: 256328
Datum: 08.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var A8;
(function (A8) {
    window.addEventListener("load", abfrage);
    function abfrage() {
        let howMuch = prompt("Zahl zwischen 10 und 100 eingeben"); //erzeugen eines Eingabefensters mithilfe von prompt
        if (isNaN(parseInt(howMuch)) || parseInt(howMuch) < 10 || parseInt(howMuch) > 100) {
            alert("Die Eingabe ist nicht korrekt, versuche es noch einmal."); // wenn ja, dann erscheint die Alert Box, dass die Eingabe falsch war
            abfrage(); //Rekursion  --> ist die Eingabe falsch wird die funktion abfrage noch einmal aufgerufen und nochmal ausgeführt, so erscheint das prompt fenster nochmal      
        }
        else {
            for (let i = 0; i < parseInt(howMuch); i++) {
                boxes(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 360); //man vergibt eine random position innrhalb des geöffneten Fensters und weißt den einzelnen Boxen random Farbwinkel zu
            }
        }
    }
    function boxes(_x, _y, _color) {
        let box = document.createElement("div"); //erzeugen eines neuen div
        box.style.backgroundColor = "hsl(" + _color + ",100%, 50%)";
        box.style.width = "35px";
        box.style.height = "35px";
        box.style.left = _x + "px"; //der oben erzeugten Zahl _x wird der string "px" hinzugefügt
        box.style.top = _y + "px";
        document.body.appendChild(box); //einfügen eines neuen Kindknotens am body-Knoten
    }
})(A8 || (A8 = {}));
//# sourceMappingURL=Aufgabe8.js.map