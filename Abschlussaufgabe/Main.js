/*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 23.02.18
   
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
    let confetti = [];
    let nflagge = 1;
    let nconfetti = 200;
    let image;
    let song = new Audio();
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
        //---------------------Hintergrund--------------------------------//
        let gradient = Abschluss.crc2.createLinearGradient(0, 0, 600, 0);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.5, "lightgrey");
        gradient.addColorStop(1, "grey");
        Abschluss.crc2.fillStyle = gradient;
        Abschluss.crc2.fillRect(0, 0, 800, 600);
        //------------------------Arrays-------------------------------------//
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
        image = Abschluss.crc2.getImageData(0, 0, 800, 600);
    }
    //------------------------------Konfetti-------------------------------//
    function drawConfetti() {
        confetti = [];
        for (let i = 0; i < nconfetti; i++) {
            let confX = 0 + Math.random() * 800;
            let confY = 0 + Math.random() * 600;
            let k = new Abschluss.Konfetti(confX, confY);
            confetti.push(k);
        }
    }
    //-------------------------Flaggen zeichnen-------------------------//
    function drawFlags() {
        for (let i = 0; i < flags.length; i++) {
            let fA = flags[i];
            fA.update();
        }
    }
    //----------------------------Divs zeichnen---------------------//
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
        div.addEventListener("click", handle);
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
    }
    function handle(_event) {
        let click = _event.target;
        friends = click.id;
        //---------------------Germany&Japan----------------------------//
        if (currentFlagOne == "Germany" && currentFlagTwo == "Japan") {
            drawConfetti();
            if (song != null) {
                song.pause();
            }
            song.src = "Japan.mp3";
            song.play();
            alert("Kon'nichiwa, watashitachiha tomodachidesu. \nDu hast eine Freundschaft zwischen Japan und Deutschland aufgebaut.");
            alert("Klingt die japanische Nationalhymne nicht dramatisch? \nLehne dich zurück! \nNeue Freundschaften können danach noch geschlossen werden :)");
            animate();
        }
        //------------------------Germany&Colombia------------------------//
        if (currentFlagOne == "Germany" && currentFlagTwo == "Columbia") {
            drawConfetti();
            if (song != null) {
                song.pause();
            }
            song.src = "Colombia.mp3";
            song.play();
            alert("Hola, que beuno somos amigos! \nDu hast eine Freundschaft zwischen Kolumbien und Deutschland aufgebaut.");
            alert("Klingt die kolumbianische Nationalhymne nicht cool? \nLehne dich zurück! \nNeue Freundschaften können danach noch geschlossen werden :)");
            animate();
        }
        //-------------------------Germany&Gambia-------------------------//
        if (currentFlagOne == "Germany" && currentFlagTwo == "Gambia") {
            drawConfetti();
            if (song != null) {
                song.pause();
            }
            song.src = "Gambia.mp3";
            song.play();
            alert("Sawubona, mnandi ukuba sihlobo. \nDu hast eine Freundschaft zwischen Gambia und Deutschland aufgebaut.");
            alert("Hast du schon einmal die Nationalhymne von Gambia gehört? \nLehne dich zurück! \nNeue Freundschaften können danach noch geschlossen werden :)");
            animate();
        }
        //---------------------------Germany&Costa Rica---------------------//
        if (currentFlagOne == "Germany" && currentFlagTwo == "CostaRica") {
            drawConfetti();
            if (song != null) {
                song.pause();
            }
            song.src = "Costa Rica.mp3";
            song.play();
            alert("Pura Vida, trabamos amistad con vos! \nDu hast eine Freundschaft zwischen Costa Rica und Deutschland aufgebaut.");
            alert("Hast du schon einmal die Nationalhymne von Costa Rica gehört? \nLehne dich zurück! \nNeue Freundschaften können danach noch geschlossen werden :)");
            animate();
        }
    }
    //-------------ANIMATE-----------------//
    function animate() {
        //crc2.clearRect(0,0,800,600);
        Abschluss.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < confetti.length; i++) {
            let k = confetti[i];
            k.update();
        }
        window.setTimeout(animate, 10);
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Main.js.map