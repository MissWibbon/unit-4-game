var guesses = 0;
var min = 19;
var max = 120;
var valMin = 1;
var valMax = 12;
var randomNum = Math.random() * (+max - +min) + +min;
var ranNumRound = Math.round(randomNum);
var randomNumber = document.getElementById("randomNumber").innerHTML = ranNumRound;
var randomVal1 = Math.random() * (+valMax - +valMin) + +valMin;
var randomVal2 = Math.random() * (+valMax - +valMin) + +valMin;
var randomVal3 = Math.random() * (+valMax - +valMin) + +valMin;
var randomVal4 = Math.random() * (+valMax - +valMin) + +valMin;

var blueVal = Math.round(randomVal1);
var redVal = Math.round(randomVal2);
var purpleVal = Math.round(randomVal3);
var greenVal = Math.round(randomVal4);

var userScore = 0;
var points = 0;
var blueCrystal = document.getElementById("blueCrystal").onclick = function (){
    points = points + blueVal;
    console.log(points);
    document.getElementById("score").innerHTML = points;

};    
var redCrystal = document.getElementById("redCrystal").onclick = function (){
    points = points + redVal;
    console.log(points);
    document.getElementById("score").innerHTML = points;

};    
var greenCrystal = document.getElementById("greenCrystal").onclick = function (){
    points = points + greenVal;
    console.log(points);
    document.getElementById("score").innerHTML = points;

};    
var purpleCrystal = document.getElementById("purpleCrystal").onclick = function (){
    points = points + purpleVal;
    console.log(points);
    document.getElementById("score").innerHTML = points;

};    
