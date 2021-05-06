function task8_1(text){
   document.write("<p class='task8_1'>"+text+"</p>");
}

task8_1("Hello World 1");
task8_1("Hello World 2");


function task8_3(text, size){
   document.write("<p style='font-size:"+size+"px'>"+text+"</p>");
}

task8_3("Hello", 50);


function f1(){
   document.write("<h2>Function 1</h2>");
}

f1();
f1();

function f2(name, lastname=" "){
   document.write("<h2>"+name+" "+lastname+"</h2>")
}

f2("Beso")
f2("Beso", "Tabatadze")

function f3(){
   document.write("<p>This is before retunr</p>");
   return 21;
   document.write("<p>This is after return</p>");
}

document.write(f3()+875);

function f4(x=0, y=0, z=0){
   return x+y+z;
}

console.log(f4(3, 7, 5));

m = [3, 5, "Hello", true, 34, 9.5];

console.log(m);
console.log(m[2]);

person = {firstName:"John", lastName:"Doe", age:46};
console.log(person['firstName'])
console.log(person.firstName)