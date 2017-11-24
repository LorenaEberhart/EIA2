/*
Aufgabe: Aufgabe 6 - Inheritance: Polymorphe Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/
namespace A6 {

    export class Sonne extends MovingObjects {
        

        constructor(_x: number, _y: number) {
            super(_x,_y);
        }

        draw(): void {

            ski.beginPath();
            ski.arc(this.x, this.y, 15, 0, 3 * Math.PI);
            ski.fillStyle = "yellow";
            ski.fill();
            ski.strokeStyle = "yellow";
            ski.stroke();
        }

        move(): void {

            if (this.x > 800) {
                this.x = 20;
            }
            this.x += 1;
            this.y += 0;

        }

        }

    }
