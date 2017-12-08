/*
Aufgabe: Aufgabe 7 - Interfaces: StudiVZ
Name: Lorena Eberhart
Matrikel: 256328
Datum: 01.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace StudiVZ {
    interface StudentData {
        matrikelnummer: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("n= Datensatz anlegen, a= abfragen oder s= Programm beenden \nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=weiblich oder 1=männlich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let DatenArray: string[] = _input.split(","); //String wird unterteilt in Substrings, die durch Kommas getrennt sind

        let studentData: StudentData = { //Objekt vom Interface wird erstellt 
            matrikelnummer: parseInt(DatenArray[0]),    //parseInt wandelt string in number um
            name: DatenArray[1],
            vorname: DatenArray[2],
            alter: parseInt(DatenArray[3]),
            geschlecht: parseInt(DatenArray[4]) == 0,    //wenn eine 0 eingegeben wird, wird sie in eine Zahl umgewandelt sie später verarbeitet werden kann; == ist ein Vergleichsoperator
            kommentar: DatenArray[5],
        };
        
        if (Number.isNaN(studentData.matrikelnummer)) {   //NaN bedeutet Not a Number.. hier wird abgefragt ob die Matrikelnummer wirklich eine nummer ist, wenn nicht dann wird auf NaN geprüft. NaN gibt einen boolschen Wert aus.
             return "Matrikelnummer ist keine Nummer";
        }

        students.push(studentData);

        let geschlecht: string; //geschlecht wird in einen string umgewandelt

        if (parseInt(DatenArray[4]) == 0) {   //wenn als geschlecht die Zahl 0 eingegeben wird, wird es als string "weiblich" ausgegeben
            geschlecht = "weiblich";
        }

        else {                              //wenn nicht 0 eingeben wird, dann wird der string "männlich" ausgegeben
            geschlecht = "männlich";
        }

        return "Die eingegeben Daten sind:\n" + "\nMatrikelnummer: " + studentData.matrikelnummer + "\nName: " + studentData.name + "\nVorname: " + studentData.vorname + "\nAlter: " + studentData.alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + studentData.kommentar;

    }



    function queryData(_matrikelnummer: number): string {

        for (let i: number = 0; i < students.length; i++) {

            if (students[i].matrikelnummer == _matrikelnummer) {  //zugriff auf matrikelnummer, die zuvor in saveData eingegeben wurde

                let geschlecht: string = students[i].geschlecht ? "weiblich" : "männlich";      //? überprüft ob weiblich oder männlich also 0 oder 1 eingegbene wurde

                return "Daten zur eingegebenen Matrikelnummer: " + students[i].matrikelnummer + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }

            else {          //wird die matrikelnummer nicht gefunden wird ein Fehler/string ausgegeben

                continue; //springt nochmal in die Schleife und prüft ob andere Matrikelnummer vorhanden ist
            }
        }
        return "Die eingegebene Matrikelnummer wurde nicht gefunden";  //ist Matrikelnummer nicht abgespeichert springt man mit return aus der schleife raus
        
    }
}