/*
Aufgabe: Aufgabe 6 - Inheritance: Polymorphe Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

*/
var A6;
(function (A6) {
    let objects = [];
    let nSkier = 6;
    let nSun = 1;
    let nSnow = 200;
    //let skier: SkifahrerInfo[] = [];
    // let sun: Sonne[] = [];
    // let snow: Schnee[] = [];
    window.addEventListener("load", piste);
    let image;
    function piste() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A6.ski = canvas.getContext("2d");
        console.log(A6.ski);
        //Skifahrer
        for (let i = 0; i < nSkier; i++) {
            let skiX = 270 + Math.random() * 100;
            let skiY = 140 + Math.random() * 300;
            let skiDX = 270 + Math.random() * 100;
            let skiDY = 140 + Math.random() * 300;
            let skiColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            let s = new A6.SkifahrerInfo(skiX, skiY, skiDX, skiDY, skiColor);
            objects.push(s);
        } //Array füllen mit neuen Skifahrern
        //Sonne
        for (let i = 0; i < nSun; i++) {
            let s = new A6.Sonne(20, 20);
            objects.push(s);
        }
        //Schnee
        for (let i = 0; i < nSnow; i++) {
            let snowX = 0 + Math.random() * 800;
            let snowY = 0 + Math.random() * 600;
            let s = new A6.Schnee(snowX, snowY);
            objects.push(s);
        }
        //Himmel
        A6.ski.fillStyle = "#A9D0F5";
        A6.ski.fillRect(0, 0, 800, 100);
        //Skipiste
        A6.ski.fillStyle = "#FAFAFA";
        A6.ski.fillRect(0, 100, 800, 600);
        //Hütte   
        A6.ski.fillStyle = "#8A4B08";
        A6.ski.fillRect(375, 70, 50, 30);
        A6.ski.fillRect(360, 60, 80, 10);
        //Pistenbögen
        A6.ski.beginPath();
        A6.ski.moveTo(0, 100);
        A6.ski.bezierCurveTo(0, 150, 400, 150, 350, 100);
        A6.ski.strokeStyle = "FAFAFA";
        A6.ski.stroke();
        A6.ski.fillStyle = "#A9D0F5";
        A6.ski.fill();
        A6.ski.beginPath();
        A6.ski.moveTo(450, 100);
        A6.ski.bezierCurveTo(400, 150, 800, 150, 800, 100);
        A6.ski.stroke();
        A6.ski.fill();
        //Berge    
        A6.ski.beginPath();
        A6.ski.moveTo(100, 135);
        A6.ski.lineTo(200, 10);
        A6.ski.lineTo(310, 136);
        A6.ski.closePath();
        A6.ski.strokeStyle = "#D8D8D8";
        A6.ski.stroke();
        A6.ski.fillStyle = "#BDBDBD";
        A6.ski.fill();
        A6.ski.beginPath();
        A6.ski.moveTo(515, 135);
        A6.ski.lineTo(615, 10);
        A6.ski.lineTo(725, 137);
        A6.ski.closePath();
        A6.ski.strokeStyle = "#D8D8D8";
        A6.ski.stroke();
        A6.ski.fillStyle = "#BDBDBD";
        A6.ski.fill();
        //Lift    
        A6.ski.beginPath();
        A6.ski.moveTo(400, 120);
        A6.ski.lineTo(400, 80);
        A6.ski.strokeStyle = "black";
        A6.ski.stroke();
        A6.ski.beginPath();
        A6.ski.moveTo(680, 550);
        A6.ski.lineTo(680, 350);
        A6.ski.stroke();
        A6.ski.beginPath();
        A6.ski.moveTo(400, 80);
        A6.ski.lineTo(680, 350);
        A6.ski.stroke();
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
        image = A6.ski.getImageData(0, 0, 800, 600);
        animate();
    }
    //-------------Funktionen------------//
    //Bäume    
    function drawTree(_x, _y) {
        A6.ski.beginPath();
        A6.ski.moveTo(_x, _y);
        A6.ski.lineTo(_x + 100, _y);
        A6.ski.lineTo(_x + 50, _y - 150);
        A6.ski.closePath();
        A6.ski.strokeStyle = "#088A4B";
        A6.ski.stroke();
        A6.ski.fillStyle = "#088A4B";
        A6.ski.fill();
    }
    //Zufällige Bäume
    function drawRandom(_x, _y) {
        A6.ski.beginPath();
        A6.ski.moveTo(_x, _y);
        A6.ski.lineTo(_x + 30, _y);
        A6.ski.lineTo(_x + 15, _y - 70);
        A6.ski.closePath();
        A6.ski.strokeStyle = "#0B6138";
        A6.ski.stroke();
        A6.ski.fillStyle = "#0B6138";
        A6.ski.fill();
    }
    //-------------ANIMATE-----------------//
    function animate() {
        //ski.clearRect(0,0,800,600);
        A6.ski.putImageData(image, 0, 0);
        for (let i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.update();
        }
        //Schneeflocken
        /*for (let i: number = 0; i < objects.length; i++) {
            objects[i].update();


        }


        //Skifahrer




        for (let i: number = 0; i < objects.length; i++) {
            objects[i].update();




        }


        //Sonne

        for (let i: number = 0; i < objects.length; i++) {
            objects[i].update();
        } //Sonne wird gezeichnet und bewegt durch Zugriff auf Objekt Sonne
*/
        window.setTimeout(animate, 20);
    }
})(A6 || (A6 = {}));
//# sourceMappingURL=Aufgabe6.js.map