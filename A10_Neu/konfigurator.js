var A10_Neu;
(function (A10_Neu) {
    window.addEventListener("load", init); // hört auf load wenn seite geladen ist wird init ausgeführt
    //Select ELemente
    let baumtyp = document.createElement("select");
    let halterungtyp = document.createElement("select"); //Selekt Boxen erstellen
    let lieferungtyp = document.createElement("select");
    var warenkorb = document.createElement("div"); //Warenkorb Div erstellen
    //Persönlich        InputElemente
    let contactName = document.createElement("input");
    let contactVorname = document.createElement("input");
    let contactMail = document.createElement("input"); //Texteingabefelder erstellen
    let contactAdress = document.createElement("input");
    let contactPlz = document.createElement("input");
    //Div ELement für Ausgabe Text bei Button klick
    let prufen = document.createElement("div");
    //All die erstellen Elemente werden später im Code mit Eigenschaften ausgestattet und ans DOM gehängt
    var gesamtpreis = 0; //Festlegen einer Gesamtpreis Variable, damit diese überall im Dokument aufrufbar ist
    function init() {
        //------------------------Warenkorb Definieren und Anhängen----------------------------------//
        let h2 = document.createElement("h2"); //Warenkorb überschrift
        h2.innerText = "Warenkorb"; //Text der überschrift
        h2.style.position = "absolute"; //CSS Gestaltung
        h2.style.right = "390px";
        h2.style.top = "0px";
        h2.style.zIndex = "99";
        document.getElementById("korbid").appendChild(h2); //Überschrift an div mit id korbid ins DOM hinzufügen
        warenkorb.style.display = "inline-block"; //Warenkorb Stylen
        warenkorb.style.position = "absolute";
        warenkorb.style.right = "10px";
        warenkorb.style.top = "10px";
        warenkorb.style.width = "500px";
        warenkorb.style.height = "500px";
        warenkorb.style.backgroundColor = "lightblue";
        warenkorb.style.paddingTop = "40px";
        warenkorb.style.paddingLeft = "10px";
        document.getElementById("korbid").appendChild(warenkorb); //Warenkorb (korb) an DOM anhängen
        //-----------------------Baum Definieren und Anhängen-------------------------------------//        
        baumtyp.addEventListener("change", AuswahlAuslesen); //wenn sich etwas ändert dann wird die funktion auswahlauslesen gestartet
        document.getElementById("baumtyp").appendChild(baumtyp); //Select ELement wird angehängt/gezeichnet
        for (let i = 0; i < A10_Neu.baumdaten.length; i++) {
            let option = document.createElement("option"); // drop down menu optionen werden erstellt
            option.innerText = A10_Neu.baumdaten[i].name; //Beschriftung durch einzeln durchgegangene Baumnamen
            baumtyp.id = A10_Neu.baumdaten[i].element; //baumtyp bekommt id --> also der element name
            baumtyp.appendChild(option); //optionen werden an Select Elemet angehängt
        }
        //----------------------------Halterungen Selektor-----------------------------//          
        halterungtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterungtyp);
        for (let i = 0; i < A10_Neu.halterungdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = A10_Neu.halterungdaten[i].name;
            halterungtyp.id = A10_Neu.halterungdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            halterungtyp.appendChild(option);
        }
        //------------------------------Schmuck Selektor-------------------------------------//       
        for (let i = 0; i < A10_Neu.schmuckdaten.length; i++) {
            let schmucktyp = document.createElement("input"); //Input Element wird erstellt
            schmucktyp.type = "checkbox"; //Macht es zur Checkbox
            schmucktyp.id = A10_Neu.schmuckdaten[i].element; //jeder Typ bekommt andere ID da elemente andere namen haben
            schmucktyp.addEventListener("change", function () {
                schmuckAuslesen(schmucktyp, "0"); //Werte übergeben; in kugeltyp ist alles enthalten
            });
            document.getElementById("kugeln").appendChild(schmucktyp);
            //Labels hinzufügen
            let schmucklabel = document.createElement("label");
            schmucklabel.innerText = A10_Neu.schmuckdaten[i].name;
            document.getElementById("kugeln").appendChild(schmucklabel);
            //Anzahl Stepper
            let schmuckanzahl = document.createElement("input"); //Stepper wird erstellt
            schmuckanzahl.type = "number"; //Macht es zum NummerHochZählFeld
            schmuckanzahl.step = "1";
            schmuckanzahl.min = "0";
            schmuckanzahl.value = "0";
            schmuckanzahl.style.marginRight = "1.5em";
            schmuckanzahl.addEventListener("change", function () {
                schmucktyp.checked = true; //Chekbox wird angehakt wenn man im stepper hochklickt
                schmuckAuslesen(schmucktyp, schmuckanzahl.value); //value ändert sich beim hochzählen
            });
            document.getElementById("kugeln").appendChild(schmuckanzahl);
        }
        //--------------------------------Kerzen Selektor-----------------------------------//       
        for (let i = 0; i < A10_Neu.kerzendaten.length; i++) {
            let kerzetyp = document.createElement("input");
            kerzetyp.type = "checkbox";
            kerzetyp.id = A10_Neu.kerzendaten[i].element;
            kerzetyp.addEventListener("change", function () {
                KerzenAuslesen(kerzetyp, "0");
            });
            document.getElementById("kerzen").appendChild(kerzetyp);
            //Label Hinzufügen
            let kerzelabel = document.createElement("label");
            kerzelabel.innerText = A10_Neu.kerzendaten[i].name;
            document.getElementById("kerzen").appendChild(kerzelabel);
            //Anzahl
            let kerzenanz = document.createElement("input");
            kerzenanz.type = "number";
            kerzenanz.step = "1";
            kerzenanz.min = "0";
            kerzenanz.value = "0";
            kerzenanz.style.marginRight = "1.5em";
            kerzenanz.addEventListener("change", function () {
                kerzetyp.checked = true; //Chekbox Anhaken wenn wert geändert wird
                KerzenAuslesen(kerzetyp, kerzenanz.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanz);
        }
        //------------------------Lieferoption Selektor------------------------------------//       
        lieferungtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferungtyp);
        for (let i = 0; i < A10_Neu.lieferoptionen.length; i++) {
            let option = document.createElement("option");
            option.innerText = A10_Neu.lieferoptionen[i].name;
            lieferungtyp.id = A10_Neu.lieferoptionen[i].element;
            lieferungtyp.appendChild(option);
        }
        //---------------------------Persönliche Daten Eingeben----------------------//
        contactName.type = "text";
        contactName.placeholder = "Name";
        contactName.required = true; //ist true wenn was eingegeben werden ist, prüft nachher ob was drin steht oder nicht
        contactName.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(contactName);
        contactVorname.type = "text";
        contactVorname.placeholder = "Vorname";
        contactVorname.required = true;
        contactVorname.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(contactVorname);
        contactMail.type = "email"; //Um nutzung von @ vorauszusetzen
        contactMail.placeholder = "@ erforderlich";
        contactMail.required = true;
        contactMail.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(contactMail);
        contactAdress.type = "text";
        contactAdress.placeholder = "Adresse";
        contactAdress.required = true;
        contactAdress.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(contactAdress);
        contactPlz.type = "text";
        contactPlz.placeholder = "PLZ";
        contactPlz.pattern = "[0-9]{5}";
        contactPlz.required = true;
        document.getElementById("persdaten").appendChild(contactPlz);
        //-----------------------Button generieren----------------------------------------//
        let button = document.createElement("button");
        button.innerText = "Bestellung Prüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        button.style.backgroundColor = "lightblue";
        document.getElementById("prufenbutton").appendChild(button);
    }
    //--------------------------------Schmuck Change-----------------------------------------------//
    function schmuckAuslesen(chkElement, anzahl) {
        for (let i = 0; i < A10_Neu.schmuckdaten.length; i++) {
            if (A10_Neu.schmuckdaten[i].element == chkElement.id) {
                //das was angeklickt wurde ist dasselbe wie das element welches im moment bei der schleife durchlaufen wurde dann wird es in den warenkorb hinzugefügt
                Warenkorb(chkElement.id, A10_Neu.schmuckdaten[i].name, A10_Neu.schmuckdaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    //----------------------------------Kerzen Change----------------------------------------//
    function KerzenAuslesen(chkElement, anzahl) {
        for (let i = 0; i < A10_Neu.kerzendaten.length; i++) {
            if (A10_Neu.kerzendaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, A10_Neu.kerzendaten[i].name, A10_Neu.kerzendaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    //--------------------------Baum/Halterung/Lieferung Change--------------------------------//
    function AuswahlAuslesen() {
        //Baumchange
        var baumname = baumtyp.value; //baumtyp.value == ausgewählter Wert im DropDown
        if (baumname != "") {
            ZuWarenkorb(A10_Neu.baumdaten, true, baumname); //true --> element ist ausgewählt
        }
        else {
            ZuWarenkorb(A10_Neu.baumdaten, false, baumname); //false --> Element wurde abgewählt
        }
        //Halterungchange
        var halterungname = halterungtyp.value;
        if (halterungname != "") {
            ZuWarenkorb(A10_Neu.halterungdaten, true, halterungname);
        }
        else {
            ZuWarenkorb(A10_Neu.halterungdaten, false, halterungname);
        }
        //Lieferungchange
        var lieferant = lieferungtyp.value;
        if (lieferant != "") {
            ZuWarenkorb(A10_Neu.lieferoptionen, true, lieferant);
        }
    }
    //-------------------Wird von DropDown genutzt; Sucht nach dem Preis---------------------------//
    function ZuWarenkorb(daten, ischeckt, elementname) {
        for (let i = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewählt werden kann
            }
        }
    }
    //-------------------------------------------------Warenkorb----------------------------------------------------------//
    function Warenkorb(elementId, value, preis, anzahl, selected) {
        var preisElement; //Preis von anzahl mal Element berechnen
        preisElement = anzahl * preis;
        //Wird erst bei zweitem Durchgang ausgeführt, zu Beginn keine Elemente in Korb vorhanden
        for (let i = 0; i < warenkorb.getElementsByTagName("p").length; i++) {
            if (warenkorb.getElementsByTagName("p")[i].id == elementId) {
                var innerPreis = warenkorb.getElementsByTagName("p")[i].innerText.split("=")[1]; //nach dem preis wird paragraph gesplittet der name des paragraph ist 0, der preis ist 1 daher hat man hier nur noch den preis
                warenkorb.getElementsByTagName("p")[i].remove(); //Wenn vorhanden Element löschen --> komplettes p wird gelöscht
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //p wird zur zahl gemacht, preis wird bereinigt indem alte zahl gelöscht wird
            }
            //Gesamtpreis p entfernen um später aktualisiert zurück einzufügen
            if (warenkorb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                warenkorb.getElementsByTagName("p")[i].remove(); //p vom gesamtpreis wird gelöscht weil etwas geändert wird 
            }
        }
        if (selected) {
            var p = document.createElement("p"); //dann wird ein paragraph element erzuegt
            p.id = elementId; //die id des auswewhlten objetes ist die id des p  --> also gleiche id
            p.innerText = value + "  = " + preisElement + "€"; //value ist elementname also zb. kerze =  berechneter gesamtpreis wird hinzugefügt 
            gesamtpreis = gesamtpreis + preisElement; //Gesamtpreis erhöhen
            warenkorb.appendChild(p);
        }
        //Gesamtpreis wieder hinzufügen
        var pGesamt = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€"; //alles zusammen gerechnet wird hier als inntertext erzeugt
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        warenkorb.appendChild(pGesamt);
    }
    //---------------------------------Daten prüfen bei Button drücken-------------------------//
    function PrufeDaten() {
        prufen.innerText = "";
        if (contactName.checkValidity() == false || contactVorname.checkValidity() == false || contactMail.checkValidity() == false || contactPlz.checkValidity() == false || contactAdress.checkValidity() == false) {
            prufen.innerText = "Deine Eingabe war leider fehlerhaft! Überprüfe sie noch einmal.";
            prufen.style.color = "red";
            document.body.appendChild(prufen);
        }
        else {
            prufen.innerText = "Deine Bestellung wurde erfolgreich verifiziert!";
            prufen.style.color = "green";
            document.body.appendChild(prufen);
        }
    }
})(A10_Neu || (A10_Neu = {}));
//# sourceMappingURL=konfigurator.js.map