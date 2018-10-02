"use strict";
/////////let - reassign-able variable
let message = "Hello ES6";
console.log(message);
message = "Goodbye ES5";//overwriting "Hello ES6"
console.log(message);
/////////const - not reassign-able variable
// const  message2 = "Hello ES6";
// console.log(message2);
// message2 = "Goodbye ES5";
// console.log(message2);//uncaught typeerror will shown

/////////scope of const and let
//Scope of Let and Const is calling as "Blocked scope" generally.
//Blocked scope is surrounded by {}
const name = "SZDP Design";
if (true) {
    //ここはブロック内なのでnameは別物
    const name = "Old SZDP Design";
    console.log("-----if block-----");
    console.log(name);//Old SZDP Design
    console.log("------------------")
}
console.log(name);//SZDP Design

//same eg by using var
//Scope of Var is calling as funtioned scope
var myName = "This is Mr.A"
function Hello() {
    var myName = "This is Mr.B"
    if (true) {
        //This myName is the same with myName in same function
        var myName = "This is Mr.C"
    }
    console.log(myName);
}
Hello();//This is Mr.C
console.log(myName);//This is Mr.A
      //ConstやLetの変数宣言が同じスコープで重複した場合はDuplicate declaration "name"と知らせてくれる
      //=varにはその機能がないのでletやconstの方が汎用性、安全性に富む

/////////cantion for when you'll use const
const project = {
    name: "SZDP 2018"
}
console.log(project.name);