/*
Aufgabe: Aufgabe 10 - FormElements: Weihnachtsbaumkonfigurator
Name: Lorena Eberhart
Matrikel: 256328
Datum: 07.01.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var A10_Neu;
(function (A10_Neu) {
    window.addEventListener("load", init);
    var name;
    var vorname;
    var strasse;
    var nr;
    var stadt;
    var plz;
    var korb = document.createElement("div");
    //Anlegen von Baumarten
    let tanne = {
        name: "Tanne",
        preis: 10,
    };
    let nordmann = {
        name: "Nordmanntanne",
        preis: 20,
    };
    let fichte = {
        name: "Fichte",
        preis: 15,
    };
    //Anlegen von Halterungen
    let gruen = {
        name: "Grün",
        preis: 15,
    };
    let rot = {
        name: " Rot",
        preis: 25,
    };
    let braun = {
        name: " Braun",
        preis: 15,
    };
    // Anlegen von Schmuck
    let kugel = {
        name: "Christbaumkugel",
        preis: 2,
    };
    let lametta = {
        name: "Lametta",
        preis: 9,
    };
    let stern = {
        name: "Weihnachtsstern",
        preis: 6,
    };
    //Anlegen von Kerzen
    let lichter = {
        name: "Lichterkette",
        preis: 15,
    };
    let echt = {
        name: "Echtkerzen einzeln",
        preis: 24,
    };
    let kunst = {
        name: "Kunstkerzen einzeln",
        preis: 18,
    };
    let standard = {
        name: "Standardlieferung",
    };
    let express = {
        name: "Expresslieferung",
    };
    let abhol = {
        name: "Selbstabholung",
    };
    function init(_event) {
        //Baumarten
        let baum = [tanne, nordmann, fichte];
        for (let i = 0; i < baum.length; i++) {
            let baumFieldS = document.getElementById("baumarten");
            let radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = "Radiogroup";
            radioButton.value = baum[i].name;
            radioButton.id = "radioButton";
            let label = document.createElement("label");
            label.htmlFor = baum[i].name;
            label.innerText = " " + baum[i].name + " " + baum[i].preis + "€";
            //     baumFieldS.addEventListener("change", handleChange);
            baumFieldS.appendChild(radioButton);
            baumFieldS.appendChild(label);
        }
        //Halterungen
        let halt = [gruen, rot, braun];
        for (let i = 0; i < halt.length; i++) {
            let haltFieldS = document.getElementById("halterung");
            let radioButton2 = document.createElement("input");
            radioButton2.type = "radio";
            radioButton2.name = "Halterungen";
            radioButton2.value = halt[i].name;
            radioButton2.id = halt[i].name;
            let label2 = document.createElement("label2");
            label2.htmlFor = halt[i].name;
            label2.innerText = " " + halt[i].name + " " + halt[i].preis + "€";
            haltFieldS.appendChild(radioButton2);
            haltFieldS.appendChild(label2);
        }
        // Schmuck
        let schmuck = [kugel, lametta, stern];
        for (let i = 0; i < schmuck.length; i++) {
            let schmuckFieldS = document.getElementById("baumschmuck");
            let checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.value = schmuck[i].name;
            checkBox.id = schmuck[i].name;
            let label3 = document.createElement("label3");
            label3.htmlFor = schmuck[i].name;
            label3.innerText = " " + schmuck[i].name + " " + schmuck[i].preis + "€";
            let anzahl = document.createElement("input");
            anzahl.type = "number";
            anzahl.name = "Stepper";
            anzahl.step = "1";
            anzahl.min = "0";
            anzahl.max = "10";
            anzahl.value = "0";
            schmuckFieldS.appendChild(checkBox);
            schmuckFieldS.appendChild(label3);
            schmuckFieldS.appendChild(anzahl);
        }
        // Kerzen
        let kerzen = [lichter, echt, kunst];
        for (let i = 0; i < kerzen.length; i++) {
            let kerzenFieldS = document.getElementById("baumkerzen");
            let checkBox2 = document.createElement("input");
            checkBox2.type = "checkbox";
            checkBox2.value = kerzen[i].name;
            checkBox2.id = kerzen[i].name;
            let label4 = document.createElement("label4");
            label4.htmlFor = kerzen[i].name;
            label4.innerText = " " + kerzen[i].name + " " + kerzen[i].preis + "€";
            let anzahl2 = document.createElement("input");
            anzahl2.type = "number";
            anzahl2.name = "Stepper";
            anzahl2.step = "1";
            anzahl2.min = "0";
            anzahl2.max = "10";
            anzahl2.value = "0";
            kerzenFieldS.appendChild(checkBox2);
            kerzenFieldS.appendChild(label4);
            kerzenFieldS.appendChild(anzahl2);
        }
        //Adresse
        let adresse = document.getElementById("adresse");
        name = document.createElement("input");
        name.type = "text";
        name.name = "AdresseNachname";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        adresse.appendChild(name);
        vorname = document.createElement("input");
        vorname.type = "text";
        vorname.name = "AdresseVorname";
        vorname.placeholder = "Vorname";
        vorname.pattern = "[a-zA-Z]{1,}";
        vorname.required = true;
        adresse.appendChild(vorname);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "AdresseStrasse";
        strasse.placeholder = "Straße";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        adresse.appendChild(strasse);
        nr = document.createElement("input");
        nr.type = "text";
        nr.name = "AdresseHausnummer";
        nr.placeholder = "Hausnummer";
        nr.pattern = "[0-9]{1,}";
        nr.required = true;
        adresse.appendChild(nr);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "AdressePLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        adresse.appendChild(plz);
        stadt = document.createElement("input");
        stadt.type = "text";
        stadt.name = "AdresseStadt";
        stadt.placeholder = "Stadt";
        stadt.pattern = "[a-zA-Z]{1,}";
        stadt.required = true;
        adresse.appendChild(stadt);
        //Lieferoptionen
        let lieferung = [standard, express, abhol];
        for (let i = 0; i < lieferung.length; i++) {
            let lieferSelect = document.getElementById("lieferung");
            let liefer = document.createElement("option");
            liefer.value = lieferung[i].name;
            liefer.innerText = lieferung[i].name;
            lieferSelect.appendChild(liefer);
        }
        //Button
        let button = document.getElementById("prüfung");
        let klick = document.createElement("button");
        klick.name = "Button";
        klick.type = "button";
        klick.innerText = "Prüfen";
        klick.addEventListener("mousedown", handleMouseDown);
        button.appendChild(klick);
        //Bestellung prüfen
        function handleMouseDown(_event) {
            let feedback = document.createElement("div");
            feedback.style.paddingBottom = "1em";
            if (name.checkValidity() == false || vorname.checkValidity() == false || strasse.checkValidity() == false || nr.checkValidity() == false || plz.checkValidity() == false || stadt.checkValidity() == false) {
                feedback.innerText = "Deine Daten wurden nicht korrekt eingegeben. Versuche es nochmal! ";
                feedback.style.color = "red";
                document.body.appendChild(feedback);
            }
            else {
                feedback.innerText = " Deine Daten sind korrekt, die Bestellung wird nun verarbeitet";
                feedback.style.color = "green";
                document.body.appendChild(feedback);
            }
        }
        //Warenkorb
        /*    function handleChange (_event: Event): void {
               
             let target: HTMLInputElement = <HTMLInputElement>_event.target;
    
            console.log("Changed " + target.name + " to " + target.value);
    
            if (target.name == "Radiogroup") {
                let currentTree: string = target.id;
                let currentPrice: string = target.value;
                baum[0].name= currentTree;
                baum[0].preis= currentPrice;
                console.log(baum);
            }
                
                
             if (target.name == "Halterungen") {
                let currentTree: string = target.id;
                let currentPrice: string = target.value;
                halt[0].name = currentTree;
                halt[0].preis = currentPrice;
                console.log(halt);
            }
         
            let gesamt:number= baum.target.preis + halt.target.preis
            
          
    
    
    }
            */
    }
})(A10_Neu || (A10_Neu = {}));
//# sourceMappingURL=AufgabeX.js.map