/*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/
namespace Abschluss {

    export class Konfetti {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            
        }
        
        update(): void {
            this.draw();
            this.move();
            }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2.5, 0, 2 * Math.PI);
            crc2.strokeStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            crc2.stroke();
            crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            crc2.fill();
        }

        move(): void {
            if (this.y > 600) {
                this.y = 0;
            }

            if (this.x > 800) {
                this.x = 0;
            }

            this.x += Math.random();
            this.y += Math.random();
        }

       

    }
}