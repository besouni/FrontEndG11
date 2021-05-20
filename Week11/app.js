function click1(){
   console.log("JavaScript");
   var divs =  document.getElementsByTagName("div");
   console.log(divs);
   divs[0].innerHTML = "<b>Hello World</b>";
   var classes = document.getElementsByClassName("p1");
   console.log(classes)
   for(let i=0; i<classes.length; i++){
      classes[i].style.background = "red"; 
      classes[i].innerHTML = "Hello CSS";
   }
   var p1 = document.getElementById("par1");
   console.log(p1);
   p1.innerHTML = "Hello HTML";
   p1.style.backgroundColor = "green";
}

function click2(){
   var user = document.getElementById("user");
   var p2 = document.querySelector("#par2");
   console.log(user);
   console.log(p2);
   p2.classList.add("p4");
   p2.innerHTML = user.value;
   var ps = document.querySelectorAll(".p1");
   var ps1 = document.getElementsByClassName("p1");
   console.log(ps);
   console.log(ps1);
   ps[0].classList.remove("p1");
   ps[0].classList.add("p4");
}


function click3(){
   // setTimeout(function(){
   //    console.log("Hello setTimeout");
   // }, 3000);
   setTimeout(set, 4000);
}

function set(){
    console.log("Hello setTimeout 2");
}

var i = 0;

function click4(){
   s = setInterval(function(){
      console.log("Hello setInterval->"+i)
      i++;
   }, 2000)
}

function click5(){
   console.log(s);
   clearInterval(s);
}

