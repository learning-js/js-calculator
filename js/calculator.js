$(document).ready(function() {
  var number = "";
  var sign = "";
  var formula = "";
  var calculation = 0;

  $(".btn-sign").click(function(){
    sign = $(this).attr("value");
    $("#numberScreen").html(sign);
    formula = number + sign
    number = "";
    $("#operation").html(formula);
  })

  $(".btn-push").click(function(){
    if(/([\-\+\/\*])$/.test(formula.substr(formula.length - 1))){
      number = "";
      number = number + $(this).attr("value");
      formula = formula + number;
      console.log(number);
      $("#numberScreen").html(number);
      $("#operation").html(formula);
    }
    else {
      number = number + $(this).attr("value");
      formula = formula + $(this).attr("value");
      console.log(number);
      $("#numberScreen").html(number);
      $("#operation").html(formula);
    }
  })

  $("#btn-ac").on("click", function(){
    number = "";
    formula = "";
    console.log(number);
    $("#numberScreen").html(0);
    $("#operation").html(formula);
  })

  $("#btn-ce").on("click", function(){
    number = number.substring(0, number.length - 1);
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

})