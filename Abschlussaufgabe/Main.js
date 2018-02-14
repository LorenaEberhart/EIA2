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
    window.addEventListener("load", horizont);
    let flags = [];
    let nflagge = 1;
    function horizont() {
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
        drawFlags();
    }
    function drawFlags() {
        for (let i = 0; i < flags.length; i++) {
            let fA = flags[i];
            fA.update();
        }
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Main.js.map