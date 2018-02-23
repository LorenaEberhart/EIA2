 /*
Aufgabe: Abschlussaufgabe
Name: Lorena Eberhart
Matrikel: 256328
Datum: 23.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace Abschluss {
     window.addEventListener("load", init);
    
   alert("Helfe Deutschland neue Länderfreundschaften zu bilden. \nKlicke dazu zunächst die deutsche Flagge an und danach die Flagge deiner Wahl.");
    
    
    let currentFlagOne: string;
    let currentFlagTwo: string;
    let friends: string;
    
    
    export let crc2: CanvasRenderingContext2D;
    
    let flags: FlagsArray[] = [];
    let confetti: Konfetti[]=[];
    let nflagge: number= 1;
    let nconfetti: number= 200;
    let image: ImageData;
    let song= new Audio();
    

   
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
        
        
       
        
       
    //---------------------Hintergrund--------------------------------//
   
   let gradient= crc2.createLinearGradient(0,0,600,0);
   
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.5, "lightgrey");
        gradient.addColorStop(1,"grey");
        crc2.fillStyle=gradient;
        crc2.fillRect(0,0,800,600);
      
   
        
        
        
      //------------------------Arrays-------------------------------------//
        let fahnenOne: string[]= ["Germany"];
        let fahnenTwo: string[]= ["Columbia", "Japan","CostaRica", "Gambia"];

        
        let anzahlOne: number= fahnenOne.length;
        let anzahlTwo: number= fahnenTwo.length;
        
        if (anzahlOne==fahnenOne.length) {
            for ( let i:number=0; i<fahnenOne.length; i++) {
                drawDiv(fahnenOne[i]);
                }
        
        }
        
        if (anzahlTwo==fahnenTwo.length) {
            for ( let i:number=0; i<fahnenTwo.length; i++) {
                drawDivTwo(fahnenTwo[i]);
                }
        
        }
        
        drawFlags();
        
      
        
     image= crc2.getImageData(0,0,800,600);
        
  }
    
    //------------------------------Konfetti-------------------------------//
    
    function drawConfetti(): void {
        
        confetti=[];
        
        for (let i: number = 0; i < nconfetti; i++) {
            let confX = 0 + Math.random() * 800;
            let confY = 0 + Math.random() * 600;

            let k: Konfetti = new Konfetti(confX, confY);
            confetti.push(k);
        } 
      }
    
    
    //-------------------------Flaggen zeichnen-------------------------//
    function drawFlags(): void {
        
         for (let i: number = 0; i < flags.length; i++) {
            let fA: FlagsArray = flags[i];
            fA.update();
           
           
             
             }
        }
    
    
    //----------------------------Divs zeichnen---------------------//
    
    function drawDiv(_flags: string): void {
        
        let div: HTMLDivElement= document.createElement("div");
        
      
        div.id= _flags;
        div.className= "flaggen";
        
        div.addEventListener("click", handleClick);
        document.body.appendChild(div);
        
        }
    
    function drawDivTwo(_flags: string): void {
        
        let div: HTMLDivElement= document.createElement("div");
        
      
        div.id= _flags;
        div.className= "flaggenZwei";
        
        div.addEventListener("click", handleClickTwo);
        div.addEventListener("click", handle);
        document.body.appendChild(div);
        
        }
    
    
    //--------------Events------------------------------//
    
    function handleClick(_event: MouseEvent): void {
        
        let click: HTMLDivElement = <HTMLDivElement>_event.target;
        click.style.borderStyle= "solid";
        click.style.borderColor= "yellow";
        
        
        currentFlagOne= click.id
        
       let divlistFlag: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("flaggen");

        for (let i: number = 0; i < divlistFlag.length; i++) {
            if (currentFlagOne != divlistFlag[i].id) {
                divlistFlag[i].style.borderColor = "red";
            }
        }
        
        
        
      }
    
    function handleClickTwo(_event: MouseEvent): void {
        
        let click: HTMLDivElement = <HTMLDivElement>_event.target;
        click.style.borderStyle= "solid";
        click.style.borderColor= "yellow";
        
        currentFlagTwo= click.id
        
       let divlistFlagTwo: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("flaggenZwei");

        for (let i: number = 0; i < divlistFlagTwo.length; i++) {
            if (currentFlagTwo != divlistFlagTwo[i].id) {
                divlistFlagTwo[i].style.borderStyle = "none";
                
            }
        }
        
        
        
     
        
      }
    
    
    
    
    
    
    function handle(_event: MouseEvent): void {
        let click: HTMLDivElement = <HTMLDivElement>_event.target;
   
        friends= click.id;
        
        
        //---------------------Germany&Japan----------------------------//
        if (currentFlagOne == "Germany" && currentFlagTwo == "Japan") {
            drawConfetti();
            
            if(song!=null) {
             song.pause();
                }
            
            song.src= "Japan.mp3";
            song.play();
            alert ("Kon'nichiwa, watashitachiha tomodachidesu. \nDu hast eine Freundschaft zwischen Japan und Deutschland aufgebaut.");
            alert ("Klingt die japanische Nationalhymne nicht dramatisch? \nLehne dich zurück! \nNeue Freundschaften können danach noch geschlossen werden :)");
            animate();
           // setTimeout("window.location='Abschluss.html'",15000);
            
        }
        
        
        //------------------------Germany&Colombia------------------------//
        if (currentFlagOne == "Germany" && currentFlagTwo == "Columbia") {
            drawConfetti();
            
            if(song!=null) {
             song.pause();
                }
            
           
            song.src= "Colombia.mp3";
            song.play();
            alert ("Hola, que beuno somos amigos! \nDu hast eine Freundschaft zwischen Kolumbien und Deutschland aufgebaut."); 
            alert ("Klingt die kolumbianische Nationalhymne nicht cool? \nLehne dich zurück! \nNeue Freundschaften können danach noch geschlossen werden :)");
            animate();
          
        }
        
        
        //-------------------------Germany&Gambia-------------------------//
        if (currentFlagOne == "Germany" && currentFlagTwo == "Gambia") {
            
            drawConfetti();
            
            if(song!=null) {
             song.pause();
                }
            
           
            song.src= "Gambia.mp3";
            song.play();
            alert ("Sawubona, mnandi ukuba sihlobo. \nDu hast eine Freundschaft zwischen Gambia und Deutschland aufgebaut."); 
            alert ("Hast du schon einmal die Nationalhymne von Gambia gehört? \nLehne dich zurück! \nNeue Freundschaften können danach noch geschlossen werden :)");
            animate();
           
            
            
            
            
            
        }
        
        
        //---------------------------Germany&Costa Rica---------------------//
        if (currentFlagOne == "Germany" && currentFlagTwo == "CostaRica") {
            drawConfetti();
            
            if(song!=null) {
             song.pause();
                }
            
          
            song.src= "Costa Rica.mp3";
            song.play();
            alert ("Pura Vida, trabamos amistad con vos! \nDu hast eine Freundschaft zwischen Costa Rica und Deutschland aufgebaut.");
            alert ("Hast du schon einmal die Nationalhymne von Costa Rica gehört? \nLehne dich zurück! \nNeue Freundschaften können danach noch geschlossen werden :)");
            animate();
           
            
            
    
         }
        
        
        
        
        }
    
    
    
  
    
    
    
    //-------------ANIMATE-----------------//

    function animate(): void {
        //crc2.clearRect(0,0,800,600);
        crc2.putImageData(image, 0, 0);

        for (let i = 0; i < confetti.length; i++) {
            let k: Konfetti = confetti[i];
            k.update();
            
        }




        window.setTimeout(animate, 10);
    }
    
    
    
}