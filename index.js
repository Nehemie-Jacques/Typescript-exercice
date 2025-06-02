// ✅ 1. Déclaration de variables typées
var nom = "chaine de charactere";
var age = 100;
var estEtudiant = true;
// ✅ 2. Fonction saluer
function saluer(prenom) {
    return "Bonjour ".concat(prenom, " !");
}
// ✅ 3. Fonction addition
function addition(a, b) {
    return a + b;
}
var utilisateur = {
    nom: "Nehemie",
    age: 56
};
// ✅ 5. Tableau typé + moyenne
var notes = [10, 20, 30, 40];
function calculerMoyenne(notes) {
    return notes.length === 0 ? 0 : notes.reduce(function (a, b) { return a + b; }, 0) / notes.length;
}
// ✅ 6. Fonction avec union de types
function afficherValeur(valeur) {
    if (typeof valeur === "string") {
        console.log("La valeur est de type String");
    }
    else {
        console.log("La valeur est de type Number");
    }
}
// ✅ 7. Enum Jour + test week-end
var Jour;
(function (Jour) {
    Jour[Jour["Lundi"] = 0] = "Lundi";
    Jour[Jour["Mardi"] = 1] = "Mardi";
    Jour[Jour["Mercredi"] = 2] = "Mercredi";
    Jour[Jour["Jeudi"] = 3] = "Jeudi";
    Jour[Jour["Vendredi"] = 4] = "Vendredi";
    Jour[Jour["Samedi"] = 5] = "Samedi";
    Jour[Jour["Dimanche"] = 6] = "Dimanche";
})(Jour || (Jour = {}));
function estWeekend(jour) {
    if (jour === Jour.Samedi) {
        return true;
    }
    else if (jour === Jour.Dimanche) {
        return true;
    }
    else {
        return false;
    }
    // return jour === jour.Samedi || jour === jour.Dimanche;
}
// ✅ 8. Fonction avec paramètre optionnel
function direBonjour(nom) {
    if (nom) {
        return "Bonjour, ".concat(nom);
    }
    else {
        return "Bonjour, invité";
    }
}
function afficherID(identifiant) {
    console.log(identifiant);
}
// ✅ 10. Filtrer un tableau
var nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filtrerPairs(nombres) {
    return nombres.filter(function (n) { return n % 2 === 0; });
}
