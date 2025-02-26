let nom= prompt("entrez le nom de l'utilisateur")

const age= prompt("entrer l'age de l'utilisateur")

console.log("bienvenue a mr/mme ",nom,"ayant",age,"ans")

//exercice2
let coutUnitaire,nbre;
function coutInscription(coutUnitaire,nbre){
    let total;
    total = coutUnitaire * nbre;
    return total
}
console.log(coutInscription(25000,10));

//exercice3
let age1;
function eligible(age1){
    if(age1 > 18){
        console.log("vous etes eligible")
    }else{
        console.log("vous n'etes pas eligible")
    }
}
console.log(eligible(25));

//exercice4
let note1=prompt("entrer la premiere note")
let note2=prompt("entrer la deuxieme note")
let note3=prompt("entrer la troisieme note")
let n1=parseFloat(note1)
let n2=parseFloat(note2)
let n3=parseFloat(note3)


let somme = n1 + n2+ n3,
 moy= somme / 3;
console.log( "la moyenne est:", moy)

//exercice5
let inscrit=true
let nom2="diane"
let age2=1
console.log(typeof inscrit)
console.log(typeof nom2)
console.log(typeof age2)

//exercice6

let table =[ "diane","ange","noelle"]
table.push("dora")
console.log(table)

//exercice7
let nouveau=prompt("entrer votre nom")

// function afficherAlerte() {
//     let alerte = document.getElementById('alerte');
//     let message = document.getElementById('alerteMessage');
    
   alert("bienvenue a vous ", nouveau )
    // message.innerText = "Bienvennue!",nouveau; 
    // // Afficher la boîte d'alerte
    // alerte.style.display = 'block';
//}

// function fermerAlerte() {
//     let alerte = document.getElementById('alerte');
//     alerte.style.display = 'none';
// }

console.log("bienvenue a ",nouveau)


