/*
Aufgabe: Aufgabe 6 - Inheritance: Polymorphe Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/
namespace A6 {

    export class Schnee extends MovingObjects {


        constructor(_x: number, _y: number) {
            super (_x,_y);
        }

        draw(): void {
            ski.beginPath();
            ski.arc(this.x, this.y, 2.5, 0, 2 * Math.PI);
            ski.strokeStyle = "white";
            ski.stroke();
            ski.fillStyle = "white";
            ski.fill();
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