/*
Aufgabe: Aufgabe 1 - Canvas: Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 11.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/

window.addEventListener("load", piste);

function piste(): void {
    var canvas: HTMLCanvasElement = document.getElementsByTagName("canvas") [0];
    console.log(canvas);
    
    var ski: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(ski);
    
    
    //Himmel
    ski.fillStyle="#A9D0F5";
    ski.fillRect(0,0,800,100);
   
    
    //Skipiste
    ski.fillStyle = "#FAFAFA";
    ski.fillRect(0,100,800,600);
    
    
     //Hütte
    
    ski.fillStyle="#8A4B08";
    ski.fillRect(375,70,50,30);
    
    ski.fillRect(360,60,80,10);
    
    //Pistenbögen
    ski.beginPath();
    ski.moveTo (0,100);
    ski.bezierCurveTo (0,150,400,150,350,100);
    ski.strokeStyle="FAFAFA";
    ski.stroke();
    ski.fillStyle ="#A9D0F5";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(450,100);
    ski.bezierCurveTo (400,150,800,150,800,100);
    ski.stroke();
    ski.fill();
    
    
    //Berge
    
    ski.beginPath();
    ski.moveTo(100,135);
    ski.lineTo(200,10);
    ski.lineTo(310,136);
    ski.closePath();
    ski.strokeStyle="D8D8D8";
    ski.stroke();
    ski.fillStyle="BDBDBD";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(515,135);
    ski.lineTo(615,10);
    ski.lineTo(725,137);
    ski.closePath();
    ski.strokeStyle="D8D8D8";
    ski.stroke();
    ski.fillStyle="BDBDBD";
    ski.fill();

    
    
    //Lift
    
    ski.beginPath();
    ski.moveTo(400,120)
    ski.lineTo(400,80);
    ski.strokeStyle="black";
    ski.stroke();
    
    ski.beginPath();
    ski.moveTo(680,550);
    ski.lineTo(680,350);
    ski.stroke();
    
    ski.beginPath();
    ski.moveTo(400,80);
    ski.lineTo(680,350);
    ski.stroke();
    
  //Bäume
    
    ski.beginPath();
    ski.moveTo(20,450);
    ski.lineTo(120,450);
    ski.lineTo(70,300);
    ski.closePath();
    ski.strokeStyle="#088A4B";
    ski.stroke();
    ski.fillStyle="#088A4B";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(130,450);
    ski.lineTo(230,450);
    ski.lineTo(180,300);
    ski.closePath();
    ski.stroke();
    ski.fillStyle="#088A4B";
    ski.fill();
    
    
    ski.beginPath();
    ski.moveTo(80,430);
    ski.lineTo(180,430);
    ski.lineTo(130,280);
    ski.closePath();
    ski.stroke();
    ski.fillStyle="#088A4B";
    ski.fill();
    
    ski.beginPath();
    ski.moveTo(5,580);
    ski.lineTo(105,580);
    ski.lineTo(55,400);
    ski.closePath();
    ski.stroke();
    ski.fillStyle="#088A4B";
    ski.fill();
    
    
    }