// let nom: string;
// nom = "chaine de charactere"

// const age: number = 56

const isYoung: boolean = true


type Users = {
    name: string
    prename: string
    age: number;
    ville?: [any]
}

let user: Users[] = [
    {
        name: "rashid",
        prename: "Haruna",
        age: 56,
    }
]

// ✅ 1. Déclaration de variables typées
let nom: string = "chaine de charactere"
let age: number = 100
let estEtudiant: boolean = true

// ✅ 2. Fonction saluer
function saluer (prenom : string) : string {
    return `Bonjour ${prenom} !`
}

// ✅ 3. Fonction addition
function addition (a: number, b: number) : number {
    return a + b
}


// ✅ 4. Interface Personne
interface Personne {
    nom: string
    age: number
}
let utilisateur : Personne = {
    nom: "Nehemie",
    age: 56
}

// ✅ 5. Tableau typé + moyenne
let notes: number[] = [10, 20, 30, 40]
function calculerMoyenne (notes: number[]) : number {

}

// ✅ 6. Fonction avec union de types
function afficherValeur (valeur : string | number) {
    if (typeof valeur === "string") {
        console.log("La valeur est de type String")
    } else {
        console.log("La valeur est de type Number")
    }
}

// ✅ 7. Enum Jour + test week-end
enum Jour {
    Lundi, 
    Mardi, 
    Mercredi, 
    Jeudi, 
    Vendredi, 
    Samedi, 
    Dimanche
}
function estWeekend (jour: Jour) : boolean {
    if (jour === Jour.Samedi) {
        return true
    } else if (jour === Jour.Dimanche) {
        return false    
    }
}

// ✅ 8. Fonction avec paramètre optionnel
function direBonjour (nom?: string | undefined) {
    if (nom) {
        return `Bonjour, ${nom}`
    } else {
        return "Bonjour, invité"
    }
}
