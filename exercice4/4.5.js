function calcDistance(a = [1,1], b = [2,2]) {
    return Math.sqrt( (a[0]-b[0])**2 + (a[1]-b[1])**2 ).toPrecision(3);    
}
console.log(calcDistance());