// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
// !!!! Quizas tenga que cambiar el orden del password text = password y la definicion de Var Passwordtext
};

function generatePassword() {
  window.alert("Thankyou for using my Password Generator!!!");
  var pwLength = prompt("Please select a length between 8 and 128 charecters for your password");
  if(pwLength<8 || pwLength>128) {
    window.alert("Your selection does not meet required length, please try again");
    generatePassword();
  };

  var pwLower = window.confirm("Do you want to include lowercase character?");
  var pwUpper = window.confirm("Do you want to include UPPERCASE character?");
  var pwNumeric = window.confirm("Do you want to include Numeric character?");
  var pwSpecial = window.confirm("Do you want to include Special character?");

  // console.log(pwLower);
  // console.log(pwUpper);
  // console.log(pwNumeric);
  // console.log(pwSpecial);

  if(!pwLower && !pwUpper && !pwNumeric && !pwSpecial) {
    window.alert("You need to select at least one character type");
  } else {
    window.alert("Thankyou for selecting at least one option");
  };


  
  return;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
