$(document).ready(function(){
  console.log("DOM parsed and loaded.");
  $("#designColumn").on('click',function(){
    $(".designBody").toggle();
    $(".designDescription").toggle();
  });
  $("#developmentColumn").on('click',function(){
    $(".developmentToggle").toggle();
    $(".developmentDescription").toggle();
  });
});