function beepBoop(numberInput){
var beep = "1";
var boop = "2";
var sorry = "3";



  var result= [];

  for (var i=numberInput; i>=0; --i) {
    result.push(console.log(i))
    console.log(result)
    if (result.toString().includes("3")) {
      console.log(i)
      result.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().includes("2")) {
      result.push("boop!")
    } else if (i.toString().includes("1")) {
      result.push("beep!")
    };
  };
  return result;
};
$(document).ready(function(){ //user
  $("form#enterNumber").submit(function(event) {
  event.preventDefault();
  var numberInput = parseInt($("input").val());
  var result = beepBoop(numberInput)
  $("#responces1").append(result)

});
});
