namespace A10_Neu {

export interface Daten {
    element: string;
    name: string;
    preis: number;
}
    

export let baumdaten: Daten[] = [ //multidimensionales heterogenes Array
    {element: "baum", name: "", preis: 0},
    {element: "baum", name: "Fichte", preis: 15},
    {element: "baum", name: "Nordmanntanne", preis: 20},
    {element: "baum", name: "Tanne", preis: 10}
];
   
export let halterungdaten: Daten[] = [
    {element: "halterung", name: "", preis: 0},
    {element: "halterung", name: "Grün", preis: 15},
    {element: "halterung", name: "Rot", preis: 25},
    {element: "halterung", name: "Braun", preis: 14}
];
    
    
export let schmuckdaten: Daten[] = [
    {element: "kugel", name: "Christbaumkugel", preis: 2},
    {element: "lametta", name: "Lametta", preis: 9},
    {element: "stern", name: "Weihnachtsstern", preis: 6}
];    
    
    
export let kerzendaten: Daten[] = [
    {element: "kette", name: "Lichterkette", preis: 15},
    {element: "echt", name: "Echtwachskerzen", preis: 24},
    {element: "kunst", name: "Kunstkerzen", preis: 18}
]; 
    
    
  export let lieferoptionen: Daten[] = [
    {element: "lieferant", name: "Standard", preis: 0},
    {element: "lieferant", name: "DHL Premium", preis: 5},
    {element: "lieferant", name: "Morningexpress", preis: 10}
];
       
}