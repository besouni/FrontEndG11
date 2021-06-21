var p1 = document.getElementsByTagName("p");
// console.log(p1);
var p2 = $("p");
// console.log(p2);
var d1 = $("#d1");
// console.log(d1);
function f1(){
   // console.log($(".p1"));
}

var ex2 = document.getElementById("ex2");
// console.log(ex2);
// ex2.addEventListener("click", function(){
//    console.log($("div"));
// })

$("#ex2").click(function(){
   // console.log($(this));
   var pes = $(".p1");
   var d1 = $("#d1");
   console.log(pes);
   console.log(d1);
   d1.text("Hello JQuery");
   // pes[0].text("P text");
   // console.log(pes[0]);
   // console.log($(pes[0]));
   $(pes[0]).text("P1 Text");
})

$("#ex3").on({
   click: function(){
      $(this).css("width", "300px");
	},
	mouseleave: function(){
      $(this).css("height", "100px");
	}
})


$("#ex4").click(function(){
   // $("#d1").hide(3000, function(){
   //    $("#ex4").css("font-size", "3em");
   // }).show(3000);
   // $("#d1").toggle(3000);
   $("#d1").hide(3000).show(3000).fadeOut(3000).fadeIn(3000);  
})

$("#ex5").click(function(){
   var n = $("#n").val();
   console.log(n);
   $("#n2").val(parseInt(n)+2);
})

$("#ex6").click(function(){
   $("#d1").append("<p>P END</p>");
   $("#d1").prepend("<p>P Start</p>");
   $("#d1").after("<p>P After</p>");
   $("#d1").before("<p>P Before</p>");
})

$("#ex7").click(function(){
   // $("#d1").remove();
   // $("#d1").empty();
   $(".p1").wrap("<div class='d2'></div>"); 
})

