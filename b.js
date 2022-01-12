alert("Pozdrav");
//Ovo je komentar koji neće biti ispisan nigdje
document.write("Ovo je ispisano preko document.write()");
/* Ovo je komentar
koda koji je napisan
u više redova, i svaki
od njih će biti
ignorisan */
console.log("Ovo je ispisano preko console.log()");
document.getElementById('id').innerHTML+="Za nesto vise idite na->Inspect->Console!"

let x = myFunction(4, 3); 
function myFunction(a, b) {
return a * b; // Funkcija vraća proizvod brojeva a i b
}
console.log(x);

/*Da pronađete dužinu string
 koristite ugrađeni length property*/ 
let text = "ABCDEFGHIJKLM";
let length = text.length;
console.log(length);

/*Metoda replace() zamjenjuje
 navedenu vrijednost drugom
vrijednošću u stringu: */
let text1 = "Ja se zovem Amina";
let newText = text1.replace("Amina", "Samra");
console.log(newText);

const imena = ["Amina", "Ahmed", "Amar"];
imena.push("Emir"); // Dodaje novi element (Emir) nizu imena
console.log(imena);

const ženskaImena = ["Amina", "Amila"];
const muškaImena = ["Ahmed", "Amar", "Emir"];
const imena1 = ženskaImena.concat(muškaImena);
console.log(imena1);
//Metoda concat spaja više nizova u jedan.