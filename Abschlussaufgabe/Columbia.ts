 /*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/
namespace Abschluss {
    
    export class ColumbiaInfo extends FlagsArray {
        
        constructor (_x: number, _y: number) {
            super(_x, _y);           
        }
        
        update(): void {           
            this.draw();           
        }
        
        draw(): void {
            
             //erster Streifen
            
            crc2.fillStyle = "#FACC2E";
            crc2.fillRect(this.x, this.y, 200, 75);
            
            //zweiter Streifen
            
            crc2.fillStyle = "#0404B4";
            crc2.fillRect(this.x, this.y+75, 200, 37.5);
            
            //dritter Streifen
            
            crc2.fillStyle ="#B40404";
            crc2.fillRect(this.x, this.y+112.5, 200, 37.5);
            
  
            
  
        } 
    }
}