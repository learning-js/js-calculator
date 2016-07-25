$(document).ready(function() {
  var numberOne = "";
  var numberTwo = "";
  var sign = "";
  var formula = "";
  var calculation = 0;

/*///////// FUNCTION THAT RESETS ALL VAR /////////////

function resetVar(a, b, c, d, e){
  a = "";
  b = "";
  c = "";
  d = "";
  e = 0;
} */

///////// CALCULATION /////////////

function calculate(numberA, sign, numberB, result){
  switch (sign){
    case "+":
      result = numberA + numberB;
      console.log(result);
      break;
    case "-":
      result = numberA - numberB;
      console.log(result);
      break;
    case "/":
      result = numberA / numberB;
      console.log(result);
      break;
    case "x":
      result = numberA * numberB;
      console.log(result);
      break;
  }
}

///////// PUSH A NUMBER BUTTON /////////////

$(".btn-push").click(function(){
  if(sign !== ""){
    numberTwo = numberTwo + $(this).attr("value");
    formula = formula + $(this).attr("value");
    console.log(numberOne, sign, numberTwo);
    console.log(numberTwo);
    $("#numberScreen").html(numberTwo);
    $("#operation").html(formula);
  }
    else {
      numberOne = numberOne + $(this).attr("value");
      if(numberOne.length > 10){
        console.log("el número es demasiado grande");
        $("#numberScreen").html(0);
        resetVar(numberOne, numberTwo, sign, formula, calculation);
        $("#operation").html("Too long");
      } else {
          formula = formula + $(this).attr("value");
          console.log(numberOne);
          $("#numberScreen").html(numberOne);
          $("#operation").html(formula);
        }
    }
  })

///////// PUSH A SIGN ////////////

  $(".btn-sign").click(function(){
    if(numberOne == ""){
      $("#operation").html("Not valid");
    }
    else if(sign == ""){
      sign = $(this).attr("value");
      $("#numberScreen").html(sign);
      formula = formula + sign;
      $("#operation").html(formula);
    }
    else{
      calculation = parseInt(numberOne)
    }
  })

///////// PUSH AC ////////////

  $("#btn-ac").on("click", function(){
    numberOne = "";
    numberTwo = "";
    sign = "";
    formula = "";
    calculation = 0;
    $("#numberScreen").html(0);
    $("#operation").html("");
  })

///////// PUSH CE ////////////

  $("#btn-ce").on("click", function(){
    if(numberOne.length <= 1){
      $("#numberScreen").html(0);
      numberOne = "";
      formula = formula.substring(0, numberOne.length - 1);
      $("#operation").html(formula);
    }
    else {
      number = number.substring(0, number.length - 1);
      formula = formula.substring(0, formula.length - 1);
      console.log(number);
      $("#numberScreen").html(number);
      $("#operation").html(formula);
    }
  })

})