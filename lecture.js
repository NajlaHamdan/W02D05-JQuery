
/*
https://code.jquery.com/

*/


$("p").css({ color: "red", "background-color": "green" });

$("#text1").text("welcome ");

$("input").val("")
$("body").append(`<button id="firstBTn"> this is the new button </button>`);



$("body").append(`<div id='ffff' class='div'>  <p id='text2'>  p inside div </p>   </div>`);


const fun1 = ()=>{
//    $("#ffff").removeClass("div");
//    $("#ffff").addClass("div2");
// $("#ffff").toggle("fast");
$("#ffff").fadeToggle(3000);



}

// $("#firstBTn").on("click",fun1);
$("#firstBTn").click(fun1);






$(".up").click(()=>{
    $(".down").slideToggle(2000);
});