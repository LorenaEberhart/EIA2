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
    
 //   alert("Helfe Deutschland, neue Länderfreundschaften aufzubauen!");
    
    let currentFlagOne: string;
    let currentFlagTwo: string;
    let friends: string;
    
    
    export let crc2: CanvasRenderingContext2D;
    
    let flags: FlagsArray[] = [];
    let confetti: Konfetti[]=[];
    let nflagge: number= 1;
    let nconfetti: number= 200;
    let image: ImageData;

   
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
        
      // document.getElementById("Columbia").addEventListener("click", handleClick);
      //  document.getElementById("Japan").addEventListener("click", handleClick);
     //  document.getElementById("CostaRica").addEventListener("click", handleClick);
      //  document.getElementById("Gambia").addEventListener("click", handleClick);
        
     
        
  }
    
    //Konfetti
    
    function drawConfetti(): void {
        for (let i: number = 0; i < nconfetti; i++) {
            let confX = 0 + Math.random() * 800;
            let confY = 0 + Math.random() * 600;

            let k: Konfetti = new Konfetti(confX, confY);
            confetti.push(k);
        } 
      }
    
    function drawFlags(): void {
        
         for (let i: number = 0; i < flags.length; i++) {
            let fA: FlagsArray = flags[i];
            fA.update();
           
            // document.addEventListener("click", handleClick);
             
             }
        }
    
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
        
        document.addEventListener("click", handle);
        
      }
    
    
    
    
    
    
    function handle(_event: MouseEvent): void {
        let click: HTMLDivElement = <HTMLDivElement>_event.target;
      // image= crc2.getImageData(0,0,800,600);
   
        friends= click.id;
        
        if (currentFlagOne == "Germany" && currentFlagTwo == "Japan") {
            crc2.putImageData(image,0,0);
            image= crc2.getImageData(0,0,800,600);
            drawConfetti();
            alert ("Kon'nichiwa, watashitachiha tomodachidesu. \nDu hast eine Freundschaft zwischen Japan und Deutschland aufgebaut.");
            animate();
            
        }
        
        if (currentFlagOne == "Germany" && currentFlagTwo == "Columbia") {
            alert ("Hola, que beuno somos amigos! \nDu hast eine Freundschaft zwischen Kolumbien und Deutschland aufgebaut"); }
        
        if (currentFlagOne == "Germany" && currentFlagTwo == "Gambia") {
          
            drawConfetti();
            alert ("Sawubona, mnandi ukuba sihlobo. \nDu hast eine Freundschaft zwischen Gambia und Deutschland aufgebaut"); 
           animate();
            
            
        }
        
        if (currentFlagOne == "Germany" && currentFlagTwo == "CostaRica") {
            alert ("Pura Vida, trabamos amistad con vos! \nDu hast eine Freundschaft zwischen Costa Rica und Deutschland aufgebaut");
            sound(); }
        
        
        
        }
    
    function sound(): void {
        
            var soundfile ="Joshua_Ticsay_-_Breathe.mp3";
            var sound_id="soundbox";
            var sound_message = "<";
            sound_message += 'embed src="' + soundfile + '" autostart="true" loop="false" hidden="true" height="0" width="0"';
            sound_message += ">";
            document.getElementById(sound_id).innerHTML= sound_message;
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