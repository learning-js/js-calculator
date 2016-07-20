$(document).ready(function() {
  var number = "";
  var symbol = "";
  var formula = "";
  var calculation = 0;

  $("#btn-one").on("click", function() {
    number = number + "1";
    formula = formula + number;
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-two").on("click", function() {
    number = number + "2";
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-three").on("click", function() {
    number = number + "3";
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-four").on("click", function() {
    number = number + "4";
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-five").on("click", function() {
    number = number + "5";
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-six").on("click", function() {
    number = number + "6";
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-seven").on("click", function(){
    number = number + "7";
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-eight").on("click", function(){
    number = number + "8";
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-nine").on("click", function(){
    number = number + "9";
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-zero").on("click", function(){
    number = number + "0";
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-ac").on("click", function(){
    number = "";
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-ce").on("click", function(){
    number = number.substring(0, number.length - 1);;
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

})