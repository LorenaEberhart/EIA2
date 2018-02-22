 /*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/
namespace Abschluss {
    
    export class JapanInfo extends FlagsArray {
        
        constructor (_x: number, _y: number) {
            super(_x, _y);           
        }
        
        update(): void {           
            this.draw();           
        }
        
        draw(): void {
            
            //Hintergrund
            
            crc2.fillStyle = "white";
            crc2.fillRect(this.x, this.y, 200, 150);
            
            //Kreis
            
            crc2.beginPath();
            crc2.arc(675, 100, 40, 0, 2*Math.PI);
            crc2.fillStyle= "#DF0101";
            crc2.fill();
            
          
            
  
        } 
    }
}