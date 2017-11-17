/*
Aufgabe: Aufgabe 5 - Classes: Objektorientierte Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var A5;
(function (A5) {
    let skier = [];
    let sun = [];
    let snow = [];
    window.addEventListener("load", piste);
    let image;
    function piste() {
        console.log(skier);
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A5.ski = canvas.getContext("2d");
        console.log(A5.ski);
        //Skifahrer
        for (let i = 0; i < 6; i++) {
            let skiX = 270 + Math.random() * 100;
            let skiY = 140 + Math.random() * 300;
            let skiDX = 270 + Math.random() * 100;
            let skiDY = 140 + Math.random() * 300;
            let skiColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            skier[i] = new A5.SkifahrerInfo(skiX, skiY, skiDX, skiDY, skiColor);
        } //Array füllen mit neuen Skifahrern
        //Sonne
        for (let i = 0; i < 1; i++) {
            sun[i] = new A5.Sonne(20, 20);
        }
        //Schnee
        for (let i = 0; i < 200; i++) {
            let snowX = 0 + Math.random() * 800;
            let snowY = 0 + Math.random() * 600;
            snow[i] = new A5.Schnee(snowX, snowY);
        }
        //Himmel
        A5.ski.fillStyle = "#A9D0F5";
        A5.ski.fillRect(0, 0, 800, 100);
        //Skipiste
        A5.ski.fillStyle = "#FAFAFA";
        A5.ski.fillRect(0, 100, 800, 600);
        //Hütte   
        A5.ski.fillStyle = "#8A4B08";
        A5.ski.fillRect(375, 70, 50, 30);
        A5.ski.fillRect(360, 60, 80, 10);
        //Pistenbögen
        A5.ski.beginPath();
        A5.ski.moveTo(0, 100);
        A5.ski.bezierCurveTo(0, 150, 400, 150, 350, 100);
        A5.ski.strokeStyle = "FAFAFA";
        A5.ski.stroke();
        A5.ski.fillStyle = "#A9D0F5";
        A5.ski.fill();
        A5.ski.beginPath();
        A5.ski.moveTo(450, 100);
        A5.ski.bezierCurveTo(400, 150, 800, 150, 800, 100);
        A5.ski.stroke();
        A5.ski.fill();
        //Berge    
        A5.ski.beginPath();
        A5.ski.moveTo(100, 135);
        A5.ski.lineTo(200, 10);
        A5.ski.lineTo(310, 136);
        A5.ski.closePath();
        A5.ski.strokeStyle = "#D8D8D8";
        A5.ski.stroke();
        A5.ski.fillStyle = "#BDBDBD";
        A5.ski.fill();
        A5.ski.beginPath();
        A5.ski.moveTo(515, 135);
        A5.ski.lineTo(615, 10);
        A5.ski.lineTo(725, 137);
        A5.ski.closePath();
        A5.ski.strokeStyle = "#D8D8D8";
        A5.ski.stroke();
        A5.ski.fillStyle = "#BDBDBD";
        A5.ski.fill();
        //Lift    
        A5.ski.beginPath();
        A5.ski.moveTo(400, 120);
        A5.ski.lineTo(400, 80);
        A5.ski.strokeStyle = "black";
        A5.ski.stroke();
        A5.ski.beginPath();
        A5.ski.moveTo(680, 550);
        A5.ski.lineTo(680, 350);
        A5.ski.stroke();
        A5.ski.beginPath();
        A5.ski.moveTo(400, 80);
        A5.ski.lineTo(680, 350);
        A5.ski.stroke();
        //Bäume
        drawTree(20, 450);
        drawTree(130, 450);
        drawTree(80, 430);
        drawTree(5, 580);
        //----------------Schleifen----------------//         
        //Zufällige Bäume
        for (let i = 0; i < 15; i++) {
            let x = 50 + Math.random() * 200;
            let y = 200 + Math.random() * 100;
            drawRandom(x, y);
        }
        image = A5.ski.getImageData(0, 0, 800, 600);
        animate();
    }
    //-------------Funktionen------------//
    //Bäume    
    function drawTree(_x, _y) {
        A5.ski.beginPath();
        A5.ski.moveTo(_x, _y);
        A5.ski.lineTo(_x + 100, _y);
        A5.ski.lineTo(_x + 50, _y - 150);
        A5.ski.closePath();
        A5.ski.strokeStyle = "#088A4B";
        A5.ski.stroke();
        A5.ski.fillStyle = "#088A4B";
        A5.ski.fill();
    }
    //Zufällige Bäume
    function drawRandom(_x, _y) {
        A5.ski.beginPath();
        A5.ski.moveTo(_x, _y);
        A5.ski.lineTo(_x + 30, _y);
        A5.ski.lineTo(_x + 15, _y - 70);
        A5.ski.closePath();
        A5.ski.strokeStyle = "#0B6138";
        A5.ski.stroke();
        A5.ski.fillStyle = "#0B6138";
        A5.ski.fill();
    }
    //-------------ANIMATE-----------------//
    function animate() {
        //ski.clearRect(0,0,800,600);
        A5.ski.putImageData(image, 0, 0);
        //Schneeflocken
        for (let i = 0; i < snow.length; i++) {
            snow[i].updateSnow();
        }
        //Skifahrer
        for (let i = 0; i < skier.length; i++) {
            skier[i].update();
        }
        //Sonne
        for (let i = 0; i < sun.length; i++) {
            sun[i].updateSun();
        } //Sonne wird gezeichnet und bewegt durch Zugriff auf Objekt Sonne
        window.setTimeout(animate, 20);
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=Aufgabe5.js.map