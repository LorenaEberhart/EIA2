namespace A10_Neu {
    window.addEventListener("load", init);
    
    //AuswahlBoxen
    let baumtyp: HTMLSelectElement = document.createElement("select");
    let halterungtyp: HTMLSelectElement = document.createElement("select"); //Selekt Boxen erstellen
    let lieferungtyp: HTMLSelectElement = document.createElement("select");
    var warenkorb: HTMLDivElement = document.createElement("div"); //Warenkorb Div erstellen
    
    
    //Persönlich
    let contactName: HTMLInputElement = document.createElement("input");
    let contactVorname: HTMLInputElement = document.createElement("input");
    let contactMail: HTMLInputElement = document.createElement("input"); //Texteingabefelder erstellen
    let contactAdress: HTMLInputElement = document.createElement("input");
    let contactPlz: HTMLInputElement = document.createElement("input");
    

    //Button
    let prufen: HTMLDivElement = document.createElement("div"); 

    //All die erstellen Elemente werden später im Code mit Eigenschaften ausgestattet und ans DOM gehängt
    
    
    
    var gesamtpreis: number = 0; //Festlegen einer Gesamtpreis Variable, damit diese überall im Dokument aufrufbar ist
    
    
    
    
    function init(): void {
        
//------------------------Warenkorb Definieren und Anhängen----------------------------------//
        let h2: HTMLHeadingElement = document.createElement("h2"); //Warenkorb überschrift
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
        baumtyp.addEventListener("change", AuswahlAuslesen); //oben erstellten baumtyp vararbeiten
        document.getElementById("baumtyp").appendChild(baumtyp);

        for (let i: number = 0; i < baumdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = baumdaten[i].name; 
            baumtyp.id = baumdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts; Wird später im Warenkorb gebraucht um zu prüfen ob Objekt schon vorhanden ist
            baumtyp.appendChild(option);
        }


        

//----------------------------Halterungen Selektor-----------------------------//          
        halterungtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterungtyp);

        for (let i: number = 0; i < halterungdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = halterungdaten[i].name;
            halterungtyp.id = halterungdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            halterungtyp.appendChild(option);
        }

       
        
        
//------------------------------Kugel Selektor-------------------------------------//       
        for (let i: number = 0; i < schmuckdaten.length; i++) {
            let schmucktyp: HTMLInputElement = document.createElement("input");
            schmucktyp.type = "checkbox"; //Macht es zur Checkbox
            schmucktyp.id = schmuckdaten[i].element; 
            schmucktyp.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu übergeben
                schmuckAuslesen(schmucktyp, "0"); //Werte übergeben; in kugeltyp ist alles enthalten
            });
                           
            document.getElementById("kugeln").appendChild(schmucktyp);

            //Labels hinzufügen
            let schmucklabel: HTMLLabelElement = document.createElement("label");
            schmucklabel.innerText = schmuckdaten[i].name;
            document.getElementById("kugeln").appendChild(schmucklabel);

            //Anzahl Selektor
            let schmuckanzahl: HTMLInputElement = document.createElement("input");
            schmuckanzahl.type = "number"; //Macht es zum NummerHochZählFeld
            schmuckanzahl.step = "1";
            schmuckanzahl.min = "0";
            schmuckanzahl.value = "0";
            schmuckanzahl.style.marginRight = "1.5em";
            schmuckanzahl.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu übergeben
                schmucktyp.checked = true; //Chekbox Anhaken wenn wert geändert wird
                schmuckAuslesen(schmucktyp, schmuckanzahl.value);
            });
            document.getElementById("kugeln").appendChild(schmuckanzahl);
        }

        


//--------------------------------Kerzen Selektor-----------------------------------//       
        for (let i: number = 0; i < kerzendaten.length; i++) {
            let kerzetyp: HTMLInputElement = document.createElement("input");
            kerzetyp.type = "checkbox";
            kerzetyp.id = kerzendaten[i].element;
            kerzetyp.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu übergeben
                KerzenAuslesen(kerzetyp, "0");
            });
                   
            document.getElementById("kerzen").appendChild(kerzetyp);

            //Label Hinzufügen
            let kerzelabel: HTMLLabelElement = document.createElement("label");
            kerzelabel.innerText = kerzendaten[i].name;
            document.getElementById("kerzen").appendChild(kerzelabel);

            //Anzahl
            let kerzenanz: HTMLInputElement = document.createElement("input");
            kerzenanz.type = "number";
            kerzenanz.step = "1";
            kerzenanz.min = "0";
            kerzenanz.value = "0";
            kerzenanz.style.marginRight = "1.5em";
            kerzenanz.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu übergeben
                kerzetyp.checked = true; //Chekbox Anhaken wenn wert geändert wird
                KerzenAuslesen(kerzetyp, kerzenanz.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanz);
        }

        


//------------------------Lieferoption Selektor------------------------------------//       
        lieferungtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferungtyp);

        for (let i: number = 0; i < lieferoptionen.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = lieferoptionen[i].name;
            lieferungtyp.id = lieferoptionen[i].element;
            lieferungtyp.appendChild(option);
        }


        
//---------------------------Persönliche Daten Eingeben----------------------//
        contactName.type = "text";
        contactName.placeholder = "Name";
        contactName.required = true;
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
        contactPlz.pattern=  "[0-9]{5}";
        contactPlz.required = true;
        document.getElementById("persdaten").appendChild(contactPlz);

        

//-----------------------Button generieren----------------------------------------//
        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Bestellung Prüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        button.style.backgroundColor= "lightblue";
        document.getElementById("prufenbutton").appendChild(button);
    }
    
    

//--------------------------------Kugel Change-----------------------------------------------//
    function schmuckAuslesen(chkElement: HTMLInputElement, anzahl: string): void {        //wird bei einem change von Kugeln ausgeführt
        for (let i: number = 0; i < schmuckdaten.length; i++) {
            if (schmuckdaten[i].element == chkElement.id) {

                Warenkorb(chkElement.id, schmuckdaten[i].name, schmuckdaten[i].preis, parseInt(anzahl), chkElement.checked);
                         //Element          value               preis               anzahl           selected
            }
        }
    }
    
    
    
//----------------------------------Kerzen Change----------------------------------------//
    function KerzenAuslesen(chkElement: HTMLInputElement, anzahl: string): void {        //wird bei einem change von Kerzen ausgeführt
        for (let i: number = 0; i < kerzendaten.length; i++) {
            if (kerzendaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, kerzendaten[i].name, kerzendaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    
    
    

//--------------------------Baum/Halterung/Lieferung Change--------------------------------//
    function AuswahlAuslesen(): void {              //wird bei change von Baum/Halterung/Lieferung ausgeführt
    
        //Baumchange
        var baumname: string = baumtyp.value; //baumtyp.value == ausgewählter Wert im DropDown
        if (baumname != "") {       //Hat baumname einen Wert also wurde er im dropdown gewählt dann wird er zum Warenkorb hinzugefügt
            ZuWarenkorb(baumdaten, true, baumname); //true --> element ist ausgewählt
        }
        else {          //Ist Baumname leer, wurde also nichts ausgewählt, dann wird nichts zum warenkorb hinzugefügt
            ZuWarenkorb(baumdaten, false, baumname); //false --> Element wurde abgewählt
        }

        //Halterungchange
        var halterungname: string = halterungtyp.value;
        if (halterungname != "") {
            ZuWarenkorb(halterungdaten, true, halterungname);
        } else {
            ZuWarenkorb(halterungdaten, false, halterungname);
        }


        //Lieferungchange
        var lieferant: string = lieferungtyp.value;
        if (lieferant != "") {
            ZuWarenkorb(lieferoptionen, true, lieferant);
        }
    }

    
    
    
//-------------------Wird von DropDown genutzt; Sucht nach dem Preis---------------------------//
    function ZuWarenkorb(daten: Daten[], ischeckt: boolean, elementname: string): void { 

        for (let i: number = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewählt werden kann
            }
        }
    }

    
    
    
//-------------------------------------------------Warenkorb----------------------------------------------------------//
    function Warenkorb(elementId: string, value: string, preis: number, anzahl: number, selected: boolean): void {

        var preisElement: number; //Preis von anzahl mal Element berechnen
        preisElement = anzahl * preis;

        //Wird erst bei zweitem Durchgang ausgeführt, zu Beginn keine Elemente in Korb vorhanden
        for (let i: number = 0; i < warenkorb.getElementsByTagName("p").length; i++) { //Warenkorb auf vorhandene p prüfen
            if (warenkorb.getElementsByTagName("p")[i].id == elementId) { //Vergleicht Elemente im Warenkorb mit ausgewähltem Element
                var innerPreis: string = warenkorb.getElementsByTagName("p")[i].innerText.split("=")[1]; //Preis extrahieren
                warenkorb.getElementsByTagName("p")[i].remove(); //Wenn vorhanden Element löschen
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen
            }
            
            //Gesamtpreis p entfernen um später aktualisiert zurück einzufügen
            if (warenkorb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                warenkorb.getElementsByTagName("p")[i].remove();
            }
        }

        if (selected) {
            var p: HTMLParagraphElement = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            gesamtpreis = gesamtpreis + preisElement; //Gesamtpreis erhöhen
            warenkorb.appendChild(p);
        }

        //Gesamtpreis wieder hinzufügen
        var pGesamt: HTMLParagraphElement = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        warenkorb.appendChild(pGesamt);
    }

    
    
    
//---------------------------------Daten prüfen bei Button drücken-------------------------//
    function PrufeDaten(): void {

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



}