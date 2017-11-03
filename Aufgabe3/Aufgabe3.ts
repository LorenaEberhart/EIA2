/*
Aufgabe: Aufgabe 3 - Animation: Schneegestöber
Name: Lorena Eberhart
Matrikel: 256328
Datum: 03.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/
namespace A3 {

    window.addEventListener("load", piste);
    var ski: CanvasRenderingContext2D;
    let arrayX: number[] = [];
    let arrayY: number[] = [];
    let skiX: number[]=[];
    let skiY: number[]=[];
    let skiOrigX: number[]=[];
    let skiOrigY: number[]=[];
    let sonneX: number[]=[];
    let sonneY: number[]=[];
    let image: ImageData;

    function piste(): void {
        var canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
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
        
        
        //Schneeflocken

        for (let i: number = 0; i < 200; i++) {
            arrayX[i] = 0+Math.random()*800;
            arrayY[i] = 0+Math.random()*600;
        }
        
        
        
        //Skifahrer
        
        for (let i:number=0; i<6;i++) {
            skiX[i]=250+Math.random()*100;
            skiY[i]=130+Math.random()*300;
            skiOrigX[i] = skiX[i];
            skiOrigY[i]=skiY[i];
           }
        
        //Sonne
        
        for (let i:number=0; i<1; i++) {
            
            sonneX[i]=20;
            sonneY[i]=20;
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
    
    
    //Skifahrer
    
    function skifahrer (_x:number, _y:number):void {
        
        //Körper
        ski.beginPath();
        ski.fillStyle="black";
        ski.fillRect(_x,_y,5, -30);
        
        //Kopf
        ski.beginPath();
        ski.arc(_x+3,_y-30,8,0,3*Math.PI);
        ski.fillStyle="black";
        ski.fill();
        
        //Skier
        ski.stroke();
        ski.moveTo(_x+30,_y+10);
        ski.lineTo(_x-10,_y-2);
        ski.strokeStyle="black";
        ski.stroke();
        }
    
    
    
    //Sonne
    
    function sonne(_x:number,_y:number): void {
        
        ski.beginPath();
        ski.arc(_x,_y,15,0,3*Math.PI);
        ski.fillStyle="yellow";
        ski.fill();
        ski.strokeStyle="yellow";
        ski.stroke();
        }
    
//-------------ANIMATE-----------------//

    function animate(): void {
        //ski.clearRect(0,0,800,600);
        ski.putImageData(image, 0, 0);

        
        //Schneeflocken
        
        for (let i: number = 0; i < arrayX.length; i++) {
          
            if (arrayY[i] > 600) {
                arrayY[i] = 0;
            }
            
            if (arrayX[i]>800) {
                arrayX[i]=0;
            }
           
            arrayX[i] += Math.random();
            arrayY[i] += Math.random();
            ski.beginPath();
            ski.arc(arrayX[i], arrayY[i], 2.5, 0, 2 * Math.PI);
            ski.strokeStyle = "white";
            ski.stroke();
            ski.fillStyle = "white";
            ski.fill();

        }
        
        
        //Skifahrer
        
        for (let i: number=0; i<skiX.length; i++) {
            skiX[i]+=2;
            skiY[i]+=2;
            
            skifahrer(skiX[i],skiY[i]);
            if (skiX[i]>800) {
                skiY[i]=skiOrigY[i];
                skiX[i]=skiOrigX[i];
              }
            
            }
        
        
        //Sonne
        
        for (let i: number=0; i<sonneX.length; i++) {
            
            if (sonneX[i]>800) {
                sonneX[i]=20;
             }
            sonneX[i]+=1;
            sonneY[i]+=0;
            sonne(sonneX[i],sonneY[i]);
         }
        

        window.setTimeout(animate, 20);
    }
}