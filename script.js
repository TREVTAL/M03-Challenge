// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};

function generatePassword() {
  var pwLength = prompt("Please select a length between 8 and 128 charecters for your password");
  if(pwLength<8 || pwLength>128) {
    window.alert("Your selection does not meet required length, please try again");
    generatePassword();
  };

  var pwLower = window.confirm("Do you want to allow lowercase characters in your password?");
  var pwUpper = window.confirm("Do you want to allow UPPERCASE characters in your password?");
  var pwNumeric = window.confirm("Do you want to allow Numeric characters in your password?");
  var pwSpecial = window.confirm("Do you want to allow Special characters in your password?");

  // validate selections are saved
  // console.log(pwLower);
  // console.log(pwUpper);
  // console.log(pwNumeric);
  // console.log(pwSpecial);

  // ensure user has selected at least 1 char option
  if(!pwLower && !pwUpper && !pwNumeric && !pwSpecial) {
    window.alert("You need to select at least one character type");
    return;
  };

//Password Generator=  
  if(pwLower) {
    var a = "abcdefghijklmnopqrstuvwxyz";
  } else { var a = "" };
  if(pwUpper){
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var b = a + upper;
  } else { b = a };
  if(pwNumeric) {
    var numeric = "1234567890";
    var c = b + numeric;
  } else { c = b};
  if(pwSpecial) {
    var special = "!@#$%^&*()";
    var d = c + special;
  } else { d = c };

  console.log(d);
  var passwordvalue = "";
  for (var i = 0; i <= pwLength -1; i++) {
    var randomNumber = Math.floor(Math.random() * d.length);
    passwordvalue += d.substring(randomNumber, randomNumber +1);
  };

  window.alert("Your password is:\n\n" +passwordvalue+ "\n\n Thankyou for using my Password Generator");

  console.log(passwordvalue);
  console.log("The confimed lenght of your password is" + passwordvalue.length);

  writePassword;

  return;
};



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

