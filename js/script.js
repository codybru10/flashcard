$(document).ready(function() {
  $(".clickable").click(function() {
    $(".javascript-show").toggle();
    $(".javascript-hidden").toggle();
  });
  $(".clickit").click(function() {
    $(".operator-show").toggle();
    $(".operator-hidden").toggle();
  });

  $(".click1").click(function() {
    $(".variables-show").toggle();
    $(".variables-hidden").toggle();
  });

  $(".click2").click(function() {
    $(".functions-show").toggle();
    $(".functions-hidden").toggle();
  });
});
