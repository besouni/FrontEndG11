function createBox(){
   var box = document.createElement("div");
   box.classList.add("box");
   var game = document.querySelector(".game");
   box.style.left = Math.floor(Math.random()*750)+"px";
   box.style.top = Math.floor(Math.random()*300)+"px";
   box.addEventListener("click", function(e){
      console.log(e.target);
      var countElement = document.getElementById("count");
      var count = countElement.innerHTML;
      count = parseInt(count);
      count++;
      countElement.innerHTML = count;
      // game.removeChild(e.target);
      e.target.parentElement.removeChild(e.target);
   })
   game.appendChild(box);
}

function start(){
   create = setInterval(createBox, 500);
}

function stop(){
   clearInterval(create);
}

function f1(){
   console.log("Body");
}

function f2(){
   console.log("DIV");
}

function f3(){
   console.log("IMG");
}

function f4(){
   console.log("FORM");
}

function f5(){
   console.log("OVER");
}

function f6(){
   console.log("OUT");
}

function f7(e){
   console.log("DOWN -> "+e.keyCode);
}

function f8(e){
   console.log("PRESS -> "+e.keyCode);
}