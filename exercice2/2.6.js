let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let day =0;
while((day<1) && (day>7)){
    day = Number(prompt("number between 1 and 7: "));
}
day -=1;
alert(week[day]);
