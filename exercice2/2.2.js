let min = prompt("Minimum number: ");
let max = prompt("Maximum number: ");

if (min>max){
    console.log("ERROR");
}
else{
    let current = prompt("Actual number: ");
    if ((min<current) && (max>current)){
        console.log(current);
    }
}