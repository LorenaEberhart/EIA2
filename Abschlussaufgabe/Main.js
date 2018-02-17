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
    let currentFlagOne;
    let currentFlagTwo;
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
        let fahnenOne = ["Germany"];
        let fahnenTwo = ["Columbia", "Japan", "CostaRica", "Gambia"];
        let anzahlOne = fahnenOne.length;
        let anzahlTwo = fahnenTwo.length;
        if (anzahlOne == fahnenOne.length) {
            for (let i = 0; i < fahnenOne.length; i++) {
                drawDiv(fahnenOne[i]);
            }
        }
        if (anzahlTwo == fahnenTwo.length) {
            for (let i = 0; i < fahnenTwo.length; i++) {
                drawDivTwo(fahnenTwo[i]);
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
        }
    }
    function drawDiv(_flags) {
        let div = document.createElement("div");
        div.id = _flags;
        div.className = "flaggen";
        div.addEventListener("click", handleClick);
        document.body.appendChild(div);
    }
    function drawDivTwo(_flags) {
        let div = document.createElement("div");
        div.id = _flags;
        div.className = "flaggenZwei";
        div.addEventListener("click", handleClickTwo);
        document.body.appendChild(div);
    }
    //--------------Events------------------------------//
    function handleClick(_event) {
        let click = _event.target;
        click.style.borderStyle = "solid";
        click.style.borderColor = "yellow";
        currentFlagOne = click.id;
        let divlistFlag = document.getElementsByClassName("flaggen");
        for (let i = 0; i < divlistFlag.length; i++) {
            if (currentFlagOne != divlistFlag[i].id) {
                divlistFlag[i].style.borderColor = "red";
            }
        }
    }
    function handleClickTwo(_event) {
        let click = _event.target;
        click.style.borderStyle = "solid";
        click.style.borderColor = "yellow";
        currentFlagTwo = click.id;
        let divlistFlagTwo = document.getElementsByClassName("flaggenZwei");
        for (let i = 0; i < divlistFlagTwo.length; i++) {
            if (currentFlagTwo != divlistFlagTwo[i].id) {
                divlistFlagTwo[i].style.borderStyle = "none";
            }
        }
        document.addEventListener("click", handle);
    }
    function handle(_event) {
        let click = _event.target;
        friends = click.id;
        if (currentFlagOne == "Germany" && currentFlagTwo == "Japan") {
            alert("Du hast eine Freundschaft zwischen Japan und Deutschland aufgebaut");
        }
        if (currentFlagOne == "Germany" && currentFlagTwo == "Columbia") {
            alert("Du hast eine Freundschaft zwischen Kolumbien und Deutschland aufgebaut");
        }
        if (currentFlagOne == "Germany" && currentFlagTwo == "Gambia") {
            alert("Du hast eine Freundschaft zwischen Gambia und Deutschland aufgebaut");
        }
        if (currentFlagOne == "Germany" && currentFlagTwo == "CostaRica") {
            alert("Du hast eine Freundschaft zwischen Costa Rica und Deutschland aufgebaut");
        }
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Main.js.map