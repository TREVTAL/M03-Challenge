// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // !!!! Quizas tenga que cambiar el orden del password text = password y la definicion de Var Passwordtext
  passwordText.value = password;
  var passwordText = document.querySelector("#password");
};

function generatePassword() {
  window.alert("Thankyou for using my Password Generator!!!");
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
  } else {
    window.alert("Thankyou for selecting at least one option");
  };

  // if(pwLower) {
  //   a1 = ["abcdefghijklmnopqrstuvwxyz"];
  //   a = a1.split("");
  // } else { a = [] };
  // if(pwUpper){
  //   upper1 = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  //   upper = upper1.split("");
  //   b = a.concat(upper);
  // } else { b = a };
  // if(pwNumeric) {
  //   numeric1 = ["1234567890"];
  //   numeric = numeric1.split("");
  //   c = b.concat(numeric);
  // } else { c = b};
  // if(pwSpecial) {
  //   special1 = ["!@#$%^&*()"];
  //   special = special1.split("");
  //   d = c.concat(special);
  // } else { d = c };
  
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
  
  for (var i = 0; i <= pwLength; i++) {
    var randomNumber = Math.floor(Math.random() * d.length);
    password += d.substring(randomNumber, randomNumber +1);
  };

  console.log(password);
  console.log("The confimed lenght of your password is " + password.length);

  return;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
