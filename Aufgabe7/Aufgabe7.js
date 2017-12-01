/*
Aufgabe: Aufgabe 7 - Interfaces: StudiVZ
Name: Lorena Eberhart
Matrikel: 256328
Datum: 01.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("n= Datensatz anlegen, a= abfragen oder s= Programm beenden \nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=weiblich oder 1=männlich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let DatenArray = _input.split(","); //String wird unterteilt in Substrings, die durch Kommas getrennt sind
        let studentData = {
            matrikelnummer: parseInt(DatenArray[0]),
            name: DatenArray[1],
            vorname: DatenArray[2],
            alter: parseInt(DatenArray[3]),
            geschlecht: parseInt(DatenArray[4]) == 0,
            kommentar: DatenArray[5],
        };
        if (Number.isNaN(studentData.matrikelnummer)) {
            return "Matrikelnummer ist keine Nummer";
        }
        students.push(studentData);
        let geschlecht; //geschlecht wird in einen string umgewandelt
        if (parseInt(DatenArray[4]) == 0) {
            geschlecht = "weiblich";
        }
        else {
            geschlecht = "männlich";
        }
        return "Die eingegeben Daten sind:\n" + "\nMatrikelnummer: " + studentData.matrikelnummer + "\nName: " + studentData.name + "\nVorname: " + studentData.vorname + "\nAlter: " + studentData.alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + studentData.kommentar;
    }
    function queryData(_matrikelnummer) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikelnummer) {
                let geschlecht = students[i].geschlecht ? "weiblich" : "männlich"; //? überprüft ob weiblich oder männlich also 0 oder 1 eingegbene wurde
                return "Daten zur eingegebenen Matrikelnummer: " + students[i].matrikelnummer + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }
            else {
                continue; //springt nochmal in die Schleife und prüft ob andere Matrikelnummer vorhanden ist
            }
        }
        return "Die eingegebene Matrikelnummer wurde nicht gefunden"; //ist Matrikelnummer nicht abgespeichert springt man mit return aus der schleife raus
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Aufgabe7.js.map