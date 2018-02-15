 /*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 13.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Abschluss {
     window.addEventListener("load", init);
    
    let currentFlag: string;
    let friends: string;
    
    
    export let crc2: CanvasRenderingContext2D;
    
    let flags: FlagsArray[] = [];
    let nflagge: number= 1;

   
    //---------------------------Flaggen positionieren----------------------//
    
    function init(): void {
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
        
        
        let fahnen: string[]= ["Germany", "Columbia", "Japan","CostaRica", "Gambia"];
        
        let anzahl: number= fahnen.length;
        
        if (anzahl==fahnen.length) {
            for ( let i:number; i<fahnen.length; i++) {
                drawDiv(fahnen[i]);
                }
        
        }
        
        drawFlags();
        
      // document.getElementById("Columbia").addEventListener("click", handleClick);
      //  document.getElementById("Japan").addEventListener("click", handleClick);
     //  document.getElementById("CostaRica").addEventListener("click", handleClick);
      //  document.getElementById("Gambia").addEventListener("click", handleClick);
        
     
        
  }
    
    function drawFlags(): void {
        
         for (let i: number = 0; i < flags.length; i++) {
            let fA: FlagsArray = flags[i];
            fA.update();
           
             document.addEventListener("click", handleClick);
             
             }
        }
    
    function drawDiv(_flags: string): void {
        
        let div: HTMLDivElement= document.createElement("div");
        
      
        div.id= _flags;
        div.className= "flaggen";
        
        div.addEventListener("click", handleClickTwo);
        document.getElementById("Germany").appendChild(div);
        
        }
    
    //--------------Events------------------------------//
    
    function handleClick(_event: MouseEvent): void {
        
        let click: HTMLDivElement = <HTMLDivElement>_event.target;
        click.style.borderStyle= "solid";
        click.style.borderColor= "yellow";
        
        currentFlag= click.id
        
       let divlistFlag: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("flaggen");

        for (let i: number = 0; i < divlistFlag.length; i++) {
            if (currentFlag != divlistFlag[i].id) {
                divlistFlag[i].style.borderColor = "red";
            }
        }
        
        
        
      }
    
    
    function handleClickTwo(_event: MouseEvent): void {
        let click: HTMLDivElement = <HTMLDivElement>_event.target;
        
        friends= click.id;
        
        if (currentFlag == "Germany" && currentFlag == "Japan") {
            alert ("Du hast eine Freundschaft zwischen Japan und Deutschland aufgebaut"); }
        
        }
    
    
    
}