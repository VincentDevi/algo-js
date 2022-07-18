
function facorial(a) {
    if (a==0){
        return 1;
    }
    else{
        return a*(facorial(a-1));
    }
}
console.log(facorial(5));