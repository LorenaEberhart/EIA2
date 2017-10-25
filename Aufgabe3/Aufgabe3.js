/*
Aufgabe: Aufgabe 3 - Animation: Schneegestöber
Name: Lorena Eberhart
Matrikel: 256328
Datum: 20.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var A3;
(function (A3) {
    window.addEventListener("load", piste);
    var ski;
    let arrayX = [];
    let arrayY = [];
    function piste() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        ski = canvas.getContext("2d");
        console.log(ski);
        //Himmel
        ski.fillStyle = "#A9D0F5";
        ski.fillRect(0, 0, 800, 100);
        //Skipiste
        ski.fillStyle = "#FAFAFA";
        ski.fillRect(0, 100, 800, 600);
        //Hütte
        ski.fillStyle = "#8A4B08";
        ski.fillRect(375, 70, 50, 30);
        ski.fillRect(360, 60, 80, 10);
        //Pistenbögen
        ski.beginPath();
        ski.moveTo(0, 100);
        ski.bezierCurveTo(0, 150, 400, 150, 350, 100);
        ski.strokeStyle = "FAFAFA";
        ski.stroke();
        ski.fillStyle = "#A9D0F5";
        ski.fill();
        ski.beginPath();
        ski.moveTo(450, 100);
        ski.bezierCurveTo(400, 150, 800, 150, 800, 100);
        ski.stroke();
        ski.fill();
        //Berge
        ski.beginPath();
        ski.moveTo(100, 135);
        ski.lineTo(200, 10);
        ski.lineTo(310, 136);
        ski.closePath();
        ski.strokeStyle = "D8D8D8";
        ski.stroke();
        ski.fillStyle = "BDBDBD";
        ski.fill();
        ski.beginPath();
        ski.moveTo(515, 135);
        ski.lineTo(615, 10);
        ski.lineTo(725, 137);
        ski.closePath();
        ski.strokeStyle = "D8D8D8";
        ski.stroke();
        ski.fillStyle = "BDBDBD";
        ski.fill();
        //Lift
        ski.beginPath();
        ski.moveTo(400, 120);
        ski.lineTo(400, 80);
        ski.strokeStyle = "black";
        ski.stroke();
        ski.beginPath();
        ski.moveTo(680, 550);
        ski.lineTo(680, 350);
        ski.stroke();
        ski.beginPath();
        ski.moveTo(400, 80);
        ski.lineTo(680, 350);
        ski.stroke();
        //Bäume
        drawTree(20, 450);
        drawTree(130, 450);
        drawTree(80, 430);
        drawTree(5, 580);
        //Zufällige Bäume
        for (let i = 0; i < 15; i++) {
            let x = 50 + Math.random() * 200;
            let y = 200 + Math.random() * 100;
            drawRandom(x, y);
        }
        animate();
        for (let i = 0; i < 200; i++) {
            arrayX[i] = 0;
            arrayY[i] = 0;
        }
        ski.getImageData;
    }
    //Funktionen
    //Bäume
    function drawTree(_x, _y) {
        ski.beginPath();
        ski.moveTo(_x, _y);
        ski.lineTo(_x + 100, _y);
        ski.lineTo(_x + 50, _y - 150);
        ski.closePath();
        ski.strokeStyle = "#088A4B";
        ski.stroke();
        ski.fillStyle = "#088A4B";
        ski.fill();
    }
    //Zufällige Bäume
    function drawRandom(_x, _y) {
        ski.beginPath();
        ski.moveTo(_x, _y);
        ski.lineTo(_x + 30, _y);
        ski.lineTo(_x + 15, _y - 70);
        ski.closePath();
        ski.strokeStyle = "#0B6138";
        ski.stroke();
        ski.fillStyle = "#0B6138";
        ski.fill();
    }
    //Schneeflocken
    function animate() {
        //ski.clearRect(0,0,800,600);
        for (let i = 0; i < arrayX.length; i++) {
            arrayX[i] += Math.random() * 800;
            arrayY[i] += Math.random() * 120;
            ski.arc(arrayX[i], arrayY[i], 2, 0, 2 * Math.PI);
            ski.fillStyle = "white";
            ski.fill();
        }
        window.setTimeout(animate, 1000);
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=Aufgabe3.js.map