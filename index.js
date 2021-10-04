//1
function countFromOne(num){
    for (i = 1; i < num; i++) {console.log(i);}
}

//2
function countEveryOdd(num){
    for (i = 0; i < num; i++) {if (i%2) {console.log(i);}}
  
}

//3
function isNegative(num){
    if (num < 0) {console.log("True")}
    else {console.log("False")};
  
}

//4
function betweenFiveandTwenty(num){
  if (num >= 5 && num <=20) {console.log("True")}
  else {console.log("False")};
}

//5 
function isAllowerCase(){
  
}

countFromOne(2);
countEveryOdd(7);
isNegative(3);
betweenFiveandTwenty(2);