 /*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 13.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Abschluss {
    
    export class GermanyInfo extends FlagsArray {
        
        constructor (_x: number, _y: number) {
            super(_x, _y);           
        }
        
        update(): void {           
            this.draw();           
        }
        
        draw(): void {
            
            //erster Streifen
            
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x, this.y, 200, 50);
            
            //zweiter Streifen
            
            crc2.fillStyle = "#dd0000";
            crc2.fillRect(this.x, this.y+50, 200, 50);
            
            //dritter Streifen
            
            crc2.fillStyle ="#ffce00";
            crc2.fillRect(this.x, this.y+100, 200, 50);
            
  
        } 
    }
}