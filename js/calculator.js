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
    if(sign == ""){
      number = number + $(this).attr("value");
      formula = number;
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