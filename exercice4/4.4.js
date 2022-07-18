function pickLearner(inputAr, n) {
    let index;
    let arrPicked = [];
    
    for (i=0;i<n;i++){
        index =Math.floor(Math.random()* inputAr.length);
        arrPicked.push(inputAr[index]);
    }
    return arrPicked;
}

let learnerList = ["Anthony Denis", "Axel Kirac", "Daniela Co", "Doriano Vancolcksom", "Dylan Maurcot","Eddy Vervoort", "Hazem Maddouri", "Julien Elinckx","Kamilla Moraes", "Luca Friquet", "Quentin Macq", "Rinaldo Benaccetta", "Vincent Devilers", "Benoit Blaevoet","Guillaume Baudson", "Julien Scourneau", "Sophie Gillard", "Stéphanie Pécher", "Sélim Elyahyioui", "Titouan Moussiaux", "Xavier Brigode", "Xavier Charles" ];
let studentNombre = Number(prompt("Nombre d'étudiant à choisir: "));


console.log(pickLearner(learnerList,studentNombre));
