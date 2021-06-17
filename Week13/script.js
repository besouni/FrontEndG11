function f1(){
   document.cookie = "user=btu";
}

f1();

function f2(){
   console.log(document.cookie);
   var d = new Date();
   console.log(d);
   console.log(d.getTime())
}

// f2();

function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+ d;
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

 setCookie("user1", "btu1", 2)

 function f3(){
    localStorage.setItem("user3", "btu3");
 }

 function f4(){
   console.log(localStorage.getItem("user3"));
}

function f5(){
   localStorage.removeItem("user3");
}