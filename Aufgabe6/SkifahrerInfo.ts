/*
Aufgabe: Aufgabe 6 - Inheritance: Polymorphe Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace A6 {

    export class SkifahrerInfo extends MovingObjects {
        dx: number;
        dy: number;
        color: string;

        constructor(_x: number, _y: number, _dx: number, _dy: number, _color: string) {

            super(_x,_y);
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }


        move(): void {


            this.x += 2; //Geschwindigkeit
            this.y += 2;

            if (this.x > 800) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }


        draw(): void {
            //Körper
            ski.beginPath();
            ski.fillStyle = this.color;
            ski.fillRect(this.x, this.y, 5, -30);

            //Kopf
            ski.beginPath();
            ski.arc(this.x + 3, this.y - 30, 8, 0, 3 * Math.PI);
            ski.fillStyle = this.color;
            ski.fill();

            //Skier
            ski.stroke();
            ski.moveTo(this.x + 30, this.y + 10);
            ski.lineTo(this.x - 10, this.y - 2);
            ski.strokeStyle = this.color;
            ski.stroke();
        }



    }
}