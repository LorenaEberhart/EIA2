/*
Aufgabe: Aufgabe 6 - Inheritance: Polymorphe Skipiste
Name: Lorena Eberhart
Matrikel: 256328
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/
namespace A6 {
    export class MovingObjects {
        x: number;
        y: number;
        
        constructor (_x: number, _y:number) {
            this.x= _x;
            this.y=_y;
            }
        
        update(): void {
            this.move();
            this.draw();
            }
        
        draw(): void {
            //wird für jedes Objekt einzeln gefüllt
            }
        
        move(): void {
            //wird für jedes Objekt einzeln gefüllt
            }
        }
    }
    
    
    
    
    
    
    
    
    
    
    