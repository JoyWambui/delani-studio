$(document).ready(function(){
  console.log("DOM parsed and loaded.");
  $("#designColumn").on('click',function(){
    $(".designToggle").toggle();
    $(".designDescription").toggle();
  });
  $("#developmentColumn").on('click',function(){
    $(".developmentToggle").toggle();
    $(".developmentDescription").toggle();
  });
  $("#productColumn").on('click',function(){
    $(".productToggle").toggle();
    $(".productDescription").toggle();
  });
  $("#hover8").hover(function(){
    $(".togglePort").toggle();

  });
});