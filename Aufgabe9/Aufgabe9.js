/*
Aufgabe: Aufgabe 9 - DynHTML: Erpresserbrief
Name: Lorena Eberhart
Matrikel: 256328
Datum: 15.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var A9;
(function (A9) {
    //Globaler namespace: überall zugänglich, lokaler namespace: von bestimmten Teilen des Programms zugänglich
    window.addEventListener("load", init); //Wenn Fenster geladen ist wird Funktion init ausgeführt
    let currentLetter; //Variable mir dem namen currentLetter wird angelegt vom Typ string, man kann von allen funktionen zugreifen
    //document.addEventListener("keypressed", handleAlt);
    document.addEventListener("keydown", tastaturEingabe); //horcht ob taste gedrückt wird, wenn ja dann führt es die funktion tastaturEingabe (EventHandler) aus; keydown: Event
    //Buchstaben erstellen
    function init() {
        //Array anlegen für die einzelnen Buchstaben
        let buchstaben = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let anzahl = buchstaben.length; //Länge des Arrays wird als Zahl in die Variable anzahl gespeichert
        if (anzahl == buchstaben.length) {
            for (let i = 0; i < buchstaben.length; i++) {
                drawBox(buchstaben[i]); //ein Kasten gemalt
            }
        }
        drawBrief();
    }
    //Farbe ändern beim Klicken und Buchstaben auswählen
    function handleClick(_event) {
        let klicken = _event.target; //Variable heißt klicken vom Typ HTMLDIvElement soll ein _event.target sein, soll also geklickt werden können
        klicken.style.color = "white"; //bei klicken ändert sich die Farbe; target= knoten der vom event angesprochen wird und darauf horcht ob er angeklickt wurde
        currentLetter = klicken.id; //jeder Buchstabe hat bei der Erstellung eine eigene ID erhalten. Der Buchstabe der gerade geklickt wurde (also event.target), dessen ID wird dann in currentLetter gespeichert
        // z.B. der Buchstabe K wurde erstellt mit der id K, nun wurde k angeklickt und dessen ID also K in currentLetter gespeichert
        let divList = document.getElementsByClassName("letters"); //Liste erstellen um alle Buchstaben abzuspeichern
        for (let i = 0; i < divList.length; i++) {
            if (currentLetter != divList[i].id) {
                divList[i].style.color = "black"; //dann werden alle anderen schwarz nur der geklickte buchstabe hat dann eine andere farbe
            }
        }
    }
    //divs mit Buchstaben erstellen
    function drawBox(_buchstaben) {
        let div = document.createElement("div"); //erstellem eines HTMLDivELement
        div.innerText = _buchstaben;
        div.style.backgroundColor = "lightblue";
        div.style.width = "35px";
        div.style.height = "35px";
        div.style.marginLeft = "2px";
        div.style.marginRight = "2px";
        div.style.fontSize = "30px";
        div.style.textAlign = "center";
        div.id = _buchstaben; //ID erstellt um divs zu vergleichen
        div.className = "letters";
        div.addEventListener("click", handleClick); //EventListener an die einzelnen Boxen gehängt
        document.body.appendChild(div);
    }
    //Brief zeichnen
    function drawBrief() {
        let letter = document.createElement("div");
        letter.style.backgroundColor = "lightgrey";
        letter.style.width = "800px";
        letter.style.height = "300px";
        letter.style.marginTop = "10px";
        letter.style.marginRight = "2px";
        letter.addEventListener("click", setLetters); //EventListener damit die Buchstaben gesetzt werden können
        document.body.appendChild(letter);
    }
    //Buchstaben in Brief einfügen
    function setLetters(_event) {
        let box = document.createElement("div");
        box.innerText = currentLetter;
        box.style.backgroundColor = "lightblue";
        box.style.width = "35px";
        box.style.height = "35px";
        box.style.marginLeft = "2px";
        box.style.marginRight = "2px";
        box.style.fontSize = "30px";
        box.style.textAlign = "center";
        box.style.position = "absolute";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";
        box.addEventListener("click", deleteLetter);
        document.body.appendChild(box);
        //  let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
    }
    //Buchstaben mit Tastatur auswählen
    function tastaturEingabe(event) {
        if (event.key == "a" || event.key == "A") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "b" || event.key == "B") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "c" || event.key == "C") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "d" || event.key == "D") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "e" || event.key == "E") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "f" || event.key == "F") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "g" || event.key == "G") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "h" || event.key == "H") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "i" || event.key == "I") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "j" || event.key == "J") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "k" || event.key == "K") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "l" || event.key == "L") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "m" || event.key == "M") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "n" || event.key == "N") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "o" || event.key == "O") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "p" || event.key == "P") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "q" || event.key == "Q") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "r" || event.key == "R") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "s" || event.key == "S") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "t" || event.key == "T") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "u" || event.key == "U") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "v" || event.key == "V") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "w" || event.key == "W") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "x" || event.key == "X") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "y" || event.key == "Y") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "z" || event.key == "Z") {
            currentLetter = event.key;
            setLetters;
        }
        //document.addEventListener ("keydown", tastaturEingabe);
    }
    //ALt gedrückt halten
    function handleAlt(_event) {
        if (_event.keyCode == 18) {
            deleteLetter;
        }
    }
    function deleteLetter(_event) {
        let d = _event.target;
        document.addEventListener("keypressed", handleAlt);
        document.body.removeChild(d);
    }
})(A9 || (A9 = {}));
//# sourceMappingURL=Aufgabe9.js.map