let arr = [12, 34, 1, 7, 98, 26, 57];
let min;
let max;

for (const i of arr) {
    if(i==arr[0]){
        min=i;
        max=i;
    }else{
        if(i<min){
            min=i;
        }
        else if (i>max){
            max=i;
        }
    }
}
console.log("max is : "+max+" Min is : "+min);