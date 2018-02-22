 /*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/
namespace Abschluss {
    
    export class CostaRicaInfo extends FlagsArray {
        
        constructor (_x: number, _y: number) {
            super(_x, _y);           
        }
        
        update(): void {           
            this.draw();           
        }
        
        draw(): void {
            
            //erster Streifen
            
            crc2.fillStyle = "#08298A";
            crc2.fillRect(this.x, this.y, 200, 25);
            
            //Zwischenstreifen
            
            crc2.fillStyle= "white";
            crc2.fillRect(this.x, this.y+25, 200, 25)
            
            //zweiter Streifen
            
            crc2.fillStyle = "#DF0101";
            crc2.fillRect(this.x, this.y+50, 200, 50);
            
             //Zwischenstreifen
            
            crc2.fillStyle= "white";
            crc2.fillRect(this.x, this.y+100, 200, 25)
            
            //dritter Streifen
            
            crc2.fillStyle ="#08298A";
            crc2.fillRect(this.x, this.y+125, 200, 25);
  
        } 
    }
}