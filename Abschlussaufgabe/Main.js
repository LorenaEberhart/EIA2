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
    //   alert("Helfe Deutschland, neue Länderfreundschaften aufzubauen!");
    let currentFlagOne;
    let currentFlagTwo;
    let friends;
    let flags = [];
    let confetti = [];
    let nflagge = 1;
    let nconfetti = 200;
    let image;
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
        image = Abschluss.crc2.getImageData(0, 0, 800, 600);
    }
    //Konfetti
    function drawConfetti() {
        for (let i = 0; i < nconfetti; i++) {
            let confX = 0 + Math.random() * 800;
            let confY = 0 + Math.random() * 600;
            let k = new Abschluss.Konfetti(confX, confY);
            confetti.push(k);
        }
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
            drawConfetti();
            var song = new Audio();
            song.src = "Japan.mp3";
            song.play();
            alert("Kon'nichiwa, watashitachiha tomodachidesu. \nDu hast eine Freundschaft zwischen Japan und Deutschland aufgebaut.\nDu hörst die Japanische Nationalhymne.");
            animate();
        }
        if (currentFlagOne == "Germany" && currentFlagTwo == "Columbia") {
            drawConfetti();
            var song = new Audio();
            song.src = "Colombia.mp3";
            song.play();
            alert("Hola, que beuno somos amigos! \nDu hast eine Freundschaft zwischen Kolumbien und Deutschland aufgebaut. \nDu hörst die Kolumbianische Nationalhymne.");
            animate();
        }
        if (currentFlagOne == "Germany" && currentFlagTwo == "Gambia") {
            drawConfetti();
            var song = new Audio();
            song.src = "Gambia.mp3";
            song.play();
            alert("Sawubona, mnandi ukuba sihlobo. \nDu hast eine Freundschaft zwischen Gambia und Deutschland aufgebaut. \nDu hörst die Nationalhymne von Gambia.");
            animate();
        }
        if (currentFlagOne == "Germany" && currentFlagTwo == "CostaRica") {
            drawConfetti();
            var song = new Audio();
            song.src = "Costa Rica.mp3";
            song.play();
            alert("Pura Vida, trabamos amistad con vos! \nDu hast eine Freundschaft zwischen Costa Rica und Deutschland aufgebaut \nDu hörst die Nationalhymne von Costa Rica.");
            animate();
        }
    }
    /*  function sound(): void {
          
              var soundfile ="Joshua_Ticsay_-_Breathe.mp3";
              var sound_id="soundbox";
              var sound_message = "<";
              sound_message += 'embed src="' + soundfile + '" autostart="true" loop="false" hidden="true" height="0" width="0"';
              sound_message += ">";
              document.getElementById(sound_id).innerHTML= sound_message;
      } */
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