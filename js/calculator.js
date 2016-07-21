$(document).ready(function() {
  var number = "";
  var symbol = "";
  var formula = "";
  var calculation = 0;

  $(".btn-push").click(function(){
    if(symbol == ""){
      number = number + $(this).attr("value");
      formula = number;
      console.log(number);
      $("#numberScreen").html(number);
      $("#operation").html(formula);
    }
  })

  $("#btn-ac").on("click", function(){
    number = "";
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

  $("#btn-ce").on("click", function(){
    number = number.substring(0, number.length - 1);
    console.log(number);
    $("#numberScreen").html(number);
    $("#operation").html(formula);
  })

})