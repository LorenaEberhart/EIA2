/*
Aufgabe: Aufgabe 9 - DynHTML: Erpresserbrief
Name: Lorena Eberhart
Matrikel: 256328
Datum: 15.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace A9 {

    window.addEventListener("load", init);
    let currentLetter: string;



    //Buchstaben erstellen
    function init(): void {

        let buchstaben: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        let anzahl: number = buchstaben.length;

        if (anzahl == buchstaben.length) {
            for (let i: number = 0; i < buchstaben.length; i++) {
                drawBox(buchstaben[i]);
            }
        }
        
        drawBrief();

    }
    
     //Farbe ändern beim Klicken und Buchstaben auswählen
    function handleClick(_event: MouseEvent): void {

            let klicken: HTMLDivElement = <HTMLDivElement>_event.target;
            klicken.style.color = "white";

            currentLetter = klicken.id;

            let divList: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letters");

            for (let i: number = 0; i < divList.length; i++) {
                if (currentLetter != divList[i].id) {
                    divList[i].style.color = "black";
                }
            }
        }


    //divs mit Buchstaben erstellen
    function drawBox(_buchstaben: string): void {



        let div: HTMLDivElement = document.createElement("div");

        div.innerText = _buchstaben;
        div.style.backgroundColor = "red";
        div.style.width = "35px";
        div.style.height = "35px";
        div.style.marginLeft = "2px";
        div.style.marginRight = "2px";
        div.style.fontSize = "30px";
        div.style.textAlign = "center";
        div.id = _buchstaben;  //ID erstellt um divs zu vergleichen
        div.className = "letters";

        div.addEventListener("click", handleClick);
        document.body.appendChild(div);

    }

    //Brief zeichnen
       function drawBrief(): void {



        let letter: HTMLDivElement = document.createElement("div");


        letter.style.backgroundColor = "lightgrey";
        letter.style.width = "800px";
        letter.style.height = "300px";
        letter.style.marginTop = "10px";
        letter.style.marginRight = "2px";

       
        letter.addEventListener("click", setLetters);
        document.body.appendChild(letter);

    }

    
    //Buchstaben in Brief einfügen
    function setLetters(_event: MouseEvent): void {

        let box: HTMLDivElement = document.createElement("div");
        
        box.innerText =currentLetter;
        box.style.backgroundColor ="red";
        box.style.width = "35px";
        box.style.height = "35px";
        box.style.marginLeft = "2px";
        box.style.marginRight = "2px";
        box.style.fontSize = "30px";
        box.style.textAlign = "center";
        box.style.position="absolute";
        box.style.left = _event.pageX + "px";
        box.style.top= _event.pageY + "px";
        
        box.addEventListener("click", setLetters);
        document.body.appendChild(box);
        
          let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
    }

}