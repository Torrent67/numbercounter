$(document).ready(function(){
 $("#enter").submit(function(event) {

var numberArry = [];

   var usernumber1 = parseInt($("input#number1").val());
   var usernumber2 = parseInt($("input#number2").val());

    for (var numberCounter = usernumber1; numberCounter < usernumber2; numberCounter += usernumber1) {
    numberArry.push(numberCounter + " ");

}

console.log(numberArry);

    $("#sum").append("<p>" + numberArry+ "</p>");

    event.preventDefault();
  });
});
