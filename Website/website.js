/*
Aufgabe: Semesteraufgabe - Persï¿½nliches Online Portfolio
Name: Lorena Eberhart
Matrikel: 256328
Datum: 19.07.17
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
//Menï¿½
var i = 0;
function ausklappen(n) {
    i += n;
    if (i > 2) {
        i = 1;
    }
    var node = document.getElementById("menu");
    if (i == 2) {
        node.style.visibility = "hidden";
    }
    else {
        node.style.visibility = "visible";
    }
}
//Footer
function fb() {
    alert('Auf Anfrage Link zu meinem Profil:)');
}
function insta() {
    alert('Auf Anfrage Link zu meinem Profil:)');
}
//Bilder
var bild1 = {
    url: "eins.jpg",
};
var bild2 = {
    url: "zwei.jpg",
};
var bild3 = {
    url: "drei.jpg",
};
var bild4 = {
    url: "vier.jpg",
};
var bild5 = {
    url: "fuenf.jpg",
};
var bild6 = {
    url: "haus.jpg",
};
var bild7 = {
    url: "sieben.jpg",
};
var bild8 = {
    url: "acht.jpg",
};
var bild9 = {
    url: "schloss.jpg",
};
var bild10 = {
    url: "karussell.JPG",
};
var bild11 = {
    url: "elf.jpg",
};
var bild12 = {
    url: "flur.jpg",
};
/*Hier habe ich ein Array aus dem Interface gebildet*/
var newArray = [bild1, bild2, bild3, bild4, bild5, bild6, bild7, bild8, bild9, bild10, bild11, bild12];
/*Diese Funktion erzeugt den HTML Code fï¿½r die Bilder. So kï¿½nnen weitere hinzugefï¿½gt werden*/
function writeHTML() {
    var node = document.getElementById("content");
    var childNodeHTML;
    var i = 0;
    while (i < newArray.length) {
        childNodeHTML = "";
        childNodeHTML += "<img src='imgs/";
        childNodeHTML += newArray[i].url;
        childNodeHTML += "' class='BildBox3'>";
        node.innerHTML += childNodeHTML;
        i++;
    }
}
document.addEventListener('DOMContentLoaded', writeHTML);
//# sourceMappingURL=Aufgabe14.js.map