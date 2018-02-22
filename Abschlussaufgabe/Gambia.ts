 /*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/
namespace Abschluss {
    
    export class GambiaInfo extends FlagsArray {
        
        constructor (_x: number, _y: number) {
            super(_x, _y);           
        }
        
        update(): void {           
            this.draw();           
        }
        
        draw(): void {
            
            //erster Streifen
            
            crc2.fillStyle = "#DF0101";
            crc2.fillRect(this.x, this.y, 200, 45);
            
            //Zwischenstreifen
            
            crc2.fillStyle= "white";
            crc2.fillRect(this.x, this.y+45, 200, 7.5)
            
            //zweiter Streifen
            
            crc2.fillStyle = "#08298A";
            crc2.fillRect(this.x, this.y+52.5, 200, 45);
            
             //Zwischenstreifen
            
            crc2.fillStyle= "white";
            crc2.fillRect(this.x, this.y+97.5, 200, 7.5)
            
            //dritter Streifen
            
            crc2.fillStyle ="#0B610B";
            crc2.fillRect(this.x, this.y+105, 200, 45);
            
            
  
        } 
    }
}