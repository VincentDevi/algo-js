function rand10() {
    return Math.floor(Math.random() * 10);
}
function multiRand(n){
    let arr = [];
    for (let i=0; i<n;i++){
        arr.push(rand10());
    }

    return arr;
}

let nombreDisplay = Number(prompt("Nombre de chiffre à générer: "));
console.log(multiRand(nombreDisplay));