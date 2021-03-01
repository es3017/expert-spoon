var containerEle = document.body.querySelector(".container");

var num1 = Number (prompt("what is number 1?"));
var num2 = Number (prompt("what is number 2?"));

var sum = (num1 + num2);

sum = Math.ceil(sum);

containerEle.innerHTML = sum;