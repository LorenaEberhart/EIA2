 /*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 13.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Abschluss {
     window.addEventListener("load", horizont);
    
    
    export let crc2: CanvasRenderingContext2D;
    
    let flags: FlagsArray[] = [];
    let nflagge: number= 1;

   
    
    
    function horizont(): void {
    var canvas: HTMLCanvasElement = document.getElementsByTagName("canvas") [0];
    console.log(canvas);
    
    crc2= canvas.getContext("2d");
    console.log(crc2);
        
   for (let i: number = 0; i < nflagge; i++) {
            let g: GermanyInfo = new GermanyInfo(300, 225);
            flags.push(g);
        }     
        
   for (let i: number = 0; i < nflagge; i++) {
            let c: ColumbiaInfo = new ColumbiaInfo(25, 25);
            flags.push(c);
       
        }
        
   for (let i: number = 0; i < nflagge; i++) {
            let gam: GambiaInfo = new GambiaInfo(575, 425);
            flags.push(gam);
       
        }
        
   for (let i: number = 0; i < nflagge; i++) {
            let j: JapanInfo = new JapanInfo(575, 25);
            flags.push(j);
       
        }
        
   for (let i: number = 0; i < nflagge; i++) {
            let cr: CostaRicaInfo = new CostaRicaInfo(25, 425);
            flags.push(cr);
       }
       
    //Hintergrund
    crc2.fillStyle="lightgrey";
    crc2.fillRect(0,0,800,600);
        
        
        drawFlags();
     
        
  }
    
    function drawFlags(): void {
        
         for (let i: number = 0; i < flags.length; i++) {
            let fA: FlagsArray = flags[i];
            fA.update();
             }
        }
    
    }