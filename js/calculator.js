$(document).ready(function() {
  var numberOne = "";
  var numberTwo = "";
  var sign = "";
  var formula = "";
  var finished = false;

/*///////// FUNCTION THAT RESETS ALL VAR /////////////

function resetVar(a, b, c, d, e){
  a = "";
  b = "";
  c = "";
  d = "";
  e = 0;
} */

///////// CALCULATION /////////////

function calculate(numberA, sign, numberB){
  var result;
  switch (sign){
    case "+":
      result = parseFloat(numberA) + parseFloat(numberB);
      return(result);
    case "-":
      result = parseFloat(numberA) - parseFloat(numberB);
      return(result);
    case "/":
      result = parseFloat(numberA) / parseFloat(numberB);
      return(result);
    case "x":
      result = parseFloat(numberA) * parseFloat(numberB);
      return(result);
  }
}

///////// PUSH A NUMBER BUTTON /////////////

$(".btn-push").click(function(){
  if(sign !== ""){
    numberTwo = numberTwo + $(this).attr("value");
    formula = formula + $(this).attr("value");
    $("#numberScreen").html(numberTwo);
    $("#operation").html(formula);
  }
    else {
      if(finished){
        numberOne = $(this).attr("value");
        formula = $(this).attr("value");
        finished = false;
        $("#numberScreen").html(numberOne);
        $("#operation").html(formula);
      }
      else {
      numberOne = numberOne + $(this).attr("value");
          if(numberOne.length > 10){
            $("#numberScreen").html(0);
            resetVar(numberOne, numberTwo, sign, formula, calculation);
            $("#operation").html("Too long");
          } else {
              formula = formula + $(this).attr("value");
              $("#numberScreen").html(numberOne);
              $("#operation").html(formula);
            }
        }
      }
  });

///////// PUSH POINT BUTTON /////////////

$("#btn-point").click(function(){
  if(sign == "" && numberOne.indexOf(".") == -1){
    numberOne = numberOne + $(this).attr("value");
    formula = formula + $(this).attr("value");
    $("#numberScreen").html(numberOne);
    $("#operation").html(formula);
  }
  if(sign !== "" && numberTwo.indexOf(".") == -1){
    numberTwo = numberTwo + $(this).attr("value");
    formula = formula + $(this).attr("value");
    $("#numberScreen").html(numberTwo);
    $("#operation").html(formula);
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
      numberOne = calculate(numberOne, sign, numberTwo);
      numberTwo = "";
      sign = $(this).attr("value");
      formula = formula + sign;
      $("#operation").html(formula);
    }
  });

///////// PUSH AC ////////////

  $("#btn-ac").on("click", function(){
    numberOne = "";
    numberTwo = "";
    sign = "";
    formula = "";
    calculation = 0;
    finished = false;
    $("#numberScreen").html(0);
    $("#operation").html("");
  });

///////// PUSH CE ////////////

  $("#btn-ce").on("click", function(){
    if(numberOne.length <= 1){
      $("#numberScreen").html(0);
      numberOne = "";
      formula = formula.substring(0, numberOne.length - 1);
      $("#operation").html(formula);
    }
    else {
      if(numberTwo == "") {
        numberOne = numberOne.substring(0, numberOne.length - 1);
        formula = formula.substring(0, formula.length - 1);
        $("#numberScreen").html(numberOne);
        $("#operation").html(formula);
      }
      else {
        numberTwo = numberTwo.substring(0, numberTwo.length - 1);
        formula = formula.substring(0, formula.length - 1);
        $("#numberScreen").html(numberTwo);
        $("#operation").html(formula);
      }
    }
  });

  ///////// PUSH EQUALS ////////////

  $(".btn-equals").on("click", function(){
    if(sign !== ""){
      numberOne = calculate(numberOne, sign, numberTwo);
      numberTwo = "";
      sign = "";
      finished = true;
      $("#numberScreen").html(numberOne);
    }
  });

})