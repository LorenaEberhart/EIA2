/*
Aufgabe: Aufgabe 6 - Inheritance: Polymorphe Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/
namespace A6 {
    export let ski: CanvasRenderingContext2D;

    let objects: MovingObjects[] = [];
    let nSkier: number = 6;
    let nSun: number = 1;
    let nSnow: number = 200;



    window.addEventListener("load", piste);


    let image: ImageData;

    function piste(): void {




        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        ski = canvas.getContext("2d");
        console.log(ski);

        //Skifahrer
        for (let i: number = 0; i < nSkier; i++) {
            let skiX = 270 + Math.random() * 100;
            let skiY = 140 + Math.random() * 300;
            let skiDX = 270 + Math.random() * 100;
            let skiDY = 140 + Math.random() * 300;
            let skiColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";


            let s: SkifahrerInfo = new SkifahrerInfo(skiX, skiY, skiDX, skiDY, skiColor);
            objects.push(s);
        } //Array füllen mit neuen Skifahrern

        //Sonne

        for (let i: number = 0; i < nSun; i++) {
            let s: Sonne = new Sonne(20, 20);
            objects.push(s);
        }

        //Schnee
        for (let i: number = 0; i < nSnow; i++) {
            let snowX = 0 + Math.random() * 800;
            let snowY = 0 + Math.random() * 600;

            let s: Schnee = new Schnee(snowX, snowY);
            objects.push(s);
        }

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
        ski.strokeStyle = "#D8D8D8";
        ski.stroke();
        ski.fillStyle = "#BDBDBD";
        ski.fill();

        ski.beginPath();
        ski.moveTo(515, 135);
        ski.lineTo(615, 10);
        ski.lineTo(725, 137);
        ski.closePath();
        ski.strokeStyle = "#D8D8D8";
        ski.stroke();
        ski.fillStyle = "#BDBDBD";
        ski.fill();



        //Lift    
        ski.beginPath();
        ski.moveTo(400, 120)
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


        //----------------Schleifen----------------//         
        //Zufällige Bäume
        for (let i: number = 0; i < 15; i++) {
            let x: number = 50 + Math.random() * 200;
            let y: number = 200 + Math.random() * 100;
            drawRandom(x, y);

        }





        image = ski.getImageData(0, 0, 800, 600);

        animate();
    }

    //-------------Funktionen------------//


    //Bäume    
    function drawTree(_x: number, _y: number): void {
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
    function drawRandom(_x: number, _y: number): void {
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



    //-------------ANIMATE-----------------//

    function animate(): void {
        //ski.clearRect(0,0,800,600);
        ski.putImageData(image, 0, 0);

        for (let i = 0; i < objects.length; i++) {
            let s: MovingObjects = objects[i];
            s.update();
        }




        window.setTimeout(animate, 20);
    }
}