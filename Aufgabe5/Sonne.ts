/*
Aufgabe: Aufgabe 5 - Classes: Objektorientierte Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/
namespace A5 {

    export class Sonne {
        x: number;
        y: number;


        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;

        }

        drawSun(): void {

            ski.beginPath();
            ski.arc(this.x, this.y, 15, 0, 3 * Math.PI);
            ski.fillStyle = "yellow";
            ski.fill();
            ski.strokeStyle = "yellow";
            ski.stroke();
        }

        moveSun(): void {

            if (this.x > 800) {
                this.x = 20;
            }
            this.x += 1;
            this.y += 0;

        }

        updateSun(): void {
            this.drawSun();
            this.moveSun();
        }

    }
}