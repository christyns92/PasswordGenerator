// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Displaying all possible options for uppercase, lowercase, characters, and numbers
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var char = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~", '"', "'"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function generatePassword()
{
  // Asks the user how many characters they want and console to the log
  var length = parseInt(prompt("How many characters would you like your password to contain? (min: 9) (max: 128)"))
  console.log(length)

  // If length is not within specified frame, choose another number within frame
  if (isNaN(length)) {
    var length = parseInt(prompt("How many characters would you like your password to contain? (min: 9) (max: 128)"))
    // alert ("NaN")
  }
  else if(length < 8 && length > 128) {
    var length = parseInt(prompt("How many characters would you like your password to contain? (min: 9) (max: 128)"))
  }

  // Creates password array, asks user to input if they would like uppercase letters. If yes, add to password array.
  let passwordArr = []
  var upper = confirm ("Do you want uppercase characters in your password?")
  console.log(upper)
  if (upper === true) {
    passwordArr = upperCase
  }

  // Asks user if they want lowercase letters in their password. If yes, add to password array.
  var lower = confirm ("Do you want lowercase characters in your password?")
  if (lower === true && passwordArr.length > 0) {
    passwordArr = passwordArr.concat(lowerCase)
    console.log('This is my password array' + passwordArr, lowerCase) 
  } else if (passwordArr.length < 1){
    passwordArr = lowerCase
    
  }
// Ask users if they want special characters. If yes, adds to password array.
  var special = confirm ("Do you want special characters in your password?")
  if (special === true && passwordArr.length > 0) {
    passwordArr = passwordArr.concat(char) 
  } else if (special){
    passwordArr = char
  }
// Asks users if they want numbers. If yes, add numbers to password array.
  var nums = confirm ("Do you want numbers in your password?")
  console.log(upper,lower,special,nums)
  if (nums === true && passwordArr.length > 0) {
    passwordArr = passwordArr.concat(number) 
  } else if (nums || passwordArr.length === 0)  {
    passwordArr = number
  }

  var pass = "";

  for (var i = 0; i < length; i++) {
    var passwordIndex = Math.floor(Math.random() * passwordArr.length)
    pass += passwordArr[passwordIndex]

  }
  return pass;
}