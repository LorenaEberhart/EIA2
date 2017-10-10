/*
Aufgabe: Aufgabe 0 - Start: Git, Github und Pages
Name: Lorena Eberhart
Matrikel: 256328
Datum: 10.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

*/


window.prompt("What´s your name?", "");

if (name != null) {
    document.getElementById("test").innerHTML =
    "Hello " + name + "! Nice to meet you!";
}