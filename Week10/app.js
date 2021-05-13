x1 = 10;
var x2 = 14;
let x3 = 23;
// const p11;
// p11 = 34;
const pi = 3.14;

const person = {name:"Vako", lastName:"Miqeladze"};
person.name = "Dato";
console.log(person.name)
// person = {age:23};

// console.log(pi);
// pi = 34;
// console.log(pi);

// console.log("out function -> "+x2)
// function f1(){
//    console.log("in function -> "+x2);
//    var x2 = 87;
//    console.log("in function -> "+x2);
// }
// f1();
// console.log("out function -> "+x2)

// console.log("out function -> "+x2)

// function f1(){
//    // console.log("in function -> "+x2);
//    let x2 = 87;
//    console.log("in function -> "+x2);
// }

// f1();
// console.log("out function -> "+x2)

// console.log(y);

// function f2(){
//    console.log("in function -> "+x3);
//    x3 = 87;
//    console.log("in function -> "+x3);
// }

// f2();

// console.log("out function -> "+x3)

function f3(){
   for(i=1; i<10; i++){
      console.log("i="+i);
   }
   console.log(i);
   for(var j=1; j<10; j++){
      console.log("j="+j);
   }
   console.log(j);
   for(let k=1; k<10; k++){
      console.log("k="+k);
   }
   // console.log(k);
}

f3();

var y = function (t){
   return t+3;
}

console.log(y(5));
console.log(y(8));

console.log(Math.random());
