
function cCardValidation(inputtxt)
{ 
  var cardno = /^(?:([0-9]{15}[0,2,4,6,8]))$/ ;
  var cardno2 = /^(?:([0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[0,2,4,6,8]))$/;
 
  console.log(cardno2);

  var number1 = document.getElementById("num").value;
  number1=number1.replaceAll("-","");
  var number =parseInt(number1);
 
  output = [],
  sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
  output.push(+sNumber.charAt(i));
}

console.log(output);

for (var i = 0, sum = 0; i < output.length; sum += output[i++]);

console.log(sum);
debugger

function dNControl(number1) {
  
  var firstNumber = null;
  for (let i = 0; i < number1.length; i++) {

      var number = parseInt(number1[i]);
      if (firstNumber == null) {
          firstNumber = number;
      }
      else {
          if (firstNumber != number) {
              return true
          }
      }
  }
  return false
}
debugger

if(sum >=16 && inputtxt.value.match(cardno) || inputtxt.value.match(cardno2))

{
 
  if (dNControl(number1) == true)
  {
  alert("Credit Card Number Is Valid");
  return true;
 
  } 
  else 
  {
    alert("Oops! Credit Card Number Is Invalid!");
  return false;
  }
}
else
{
alert("Oops!Credit Card Number Is Invalid!");
return false;
}
}
