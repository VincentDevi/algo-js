let timeIteration = prompt("how many number to add: ");
let numberAdd;
let sum = 0;
for (i=0; i<timeIteration; i++){
    numberAdd= Number(prompt("Number to add: "));
    sum += numberAdd; 
}
alert(sum);