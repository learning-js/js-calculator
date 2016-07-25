$(document).ready(function() {
  var numberOne = "";
  var numberTwo = "";
  var sign = "";
  var formula = "";
  var calculation = 0;

///////// PUSH A NUMBER BUTTON /////////////

$(".btn-push").click(function(){
  if(/([\-\+\/\*])$/.test(formula.substr(formula.length - 1))){
    number = "";
    number = number + $(this).attr("value");
    formula = formula + $(this).attr("value");
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  }
    else {
      number = number + $(this).attr("value");
      if(number.length > 10){
        console.log("el número es demasiado grande");
        $("#numberScreen").html(0);
        number = "";
        formula = "";
        $("#operation").html("Too long");
      } else {
          formula = formula + $(this).attr("value");
          console.log(number);
          $("#numberScreen").html(number);
          $("#operation").html(formula);
        }
    }
  })

///////// PUSH A SIGN ////////////

  $(".btn-sign").click(function(){
    if(numberOne == ""){
      $("#operation").html("Not valid");
    }
    else{
      sign = $(this).attr("value");
      $("#numberScreen").html(sign);
      formula = formula + sign;
      $("#operation").html(formula);
    }
  })

///////// PUSH AC ////////////

  $("#btn-ac").on("click", function(){
    number = "";
    formula = "";
    console.log(number);
    $("#numberScreen").html(0);
    $("#operation").html(formula);
  })

///////// PUSH CE ////////////

  $("#btn-ce").on("click", function(){
    if(number.length <= 1){
      $("#numberScreen").html(0);
      number = "";
      formula = formula.substring(0, number.length - 1);
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