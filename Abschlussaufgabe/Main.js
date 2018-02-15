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
    window.addEventListener("load", init);
    let currentFlag;
    let friends;
    let flags = [];
    let nflagge = 1;
    //---------------------------Flaggen positionieren----------------------//
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Abschluss.crc2 = canvas.getContext("2d");
        console.log(Abschluss.crc2);
        for (let i = 0; i < nflagge; i++) {
            let g = new Abschluss.GermanyInfo(300, 225);
            flags.push(g);
        }
        for (let i = 0; i < nflagge; i++) {
            let c = new Abschluss.ColumbiaInfo(25, 25);
            flags.push(c);
        }
        for (let i = 0; i < nflagge; i++) {
            let gam = new Abschluss.GambiaInfo(575, 425);
            flags.push(gam);
        }
        for (let i = 0; i < nflagge; i++) {
            let j = new Abschluss.JapanInfo(575, 25);
            flags.push(j);
        }
        for (let i = 0; i < nflagge; i++) {
            let cr = new Abschluss.CostaRicaInfo(25, 425);
            flags.push(cr);
        }
        //Hintergrund
        Abschluss.crc2.fillStyle = "lightgrey";
        Abschluss.crc2.fillRect(0, 0, 800, 600);
        let fahnen = ["Germany", "Columbia", "Japan", "CostaRica", "Gambia"];
        let anzahl = fahnen.length;
        if (anzahl == fahnen.length) {
            for (let i; i < fahnen.length; i++) {
                drawDiv(fahnen[i]);
            }
        }
        drawFlags();
        // document.getElementById("Columbia").addEventListener("click", handleClick);
        //  document.getElementById("Japan").addEventListener("click", handleClick);
        //  document.getElementById("CostaRica").addEventListener("click", handleClick);
        //  document.getElementById("Gambia").addEventListener("click", handleClick);
    }
    function drawFlags() {
        for (let i = 0; i < flags.length; i++) {
            let fA = flags[i];
            fA.update();
            document.addEventListener("click", handleClick);
        }
    }
    function drawDiv(_flags) {
        let div = document.createElement("div");
        div.id = _flags;
        div.className = "flaggen";
        div.addEventListener("click", handleClickTwo);
        document.getElementById("Germany").appendChild(div);
    }
    //--------------Events------------------------------//
    function handleClick(_event) {
        let click = _event.target;
        click.style.borderStyle = "solid";
        click.style.borderColor = "yellow";
        currentFlag = click.id;
        let divlistFlag = document.getElementsByClassName("flaggen");
        for (let i = 0; i < divlistFlag.length; i++) {
            if (currentFlag != divlistFlag[i].id) {
                divlistFlag[i].style.borderColor = "red";
            }
        }
    }
    function handleClickTwo(_event) {
        let click = _event.target;
        friends = click.id;
        if (currentFlag == "Germany" && currentFlag == "Japan") {
            alert("Du hast eine Freundschaft zwischen Japan und Deutschland aufgebaut");
        }
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Main.js.map