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

// var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q''r','s','t','u','v','w','x','y','z'];
// var char = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~", '"', "'"];
// var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function generatePassword()
{
  var length = parseInt (prompt("How many characters would you like your password to contain? (min: 9) (max: 128)");
  //console.log(length);

  if (isNaN(length)) {
  var length = (prompt("How many characters would you like your password to contain? (min: 9) (max: 128)");
    // alert ("NaN")
  }

  length = check(length);
  console.log(length);
  filter = filterPassword();
  pass = createPassword(filter, length);

  return pass;
}

// Checks both parameters
function check(length)
{
  while(checkType(length) === false || checkLength(length) === false)
  {
    length = prompt("Please enter a digit between 9 and 128!");
    checkType(length);
    checkLength(length);
  }

  return length;
}

// Checks if the answer submitted is a number
function checkType(length)
{
  var regExp = /[a-zA-Z]/g;

  if(typeof length === 'string')
  {

    if(regExp.test(length))
    {return false;}
    
    else if(Number.isInteger(parseInt(length)) === true)
    {return true;}

    else
    {return false;}

  }

  else
  {return false;}
} 

// Checks the length and make sures it is right size
function checkLength(length)
{
  if(length < 9 || length > 128)
  {return false;}

  else
  {return true;}
}

function filterPassword()
{
  var filter = [];

  if(confirm("Would you like special characters included in your password?"))
  {
    console.log("special characters: true");
    filter.push(true);
    console.log(filter[0]);
  }

  else
  {
    console.log("special characters: false");
    filter.push(false);
    console.log(filter[0]);
  }

  if(confirm("Would you like your password to include numerical values?"))
  {
    console.log("number values: true");
    filter.push(true);
    console.log(filter[1]);
  }

  else
  {
    console.log("number values: false");
    filter.push(false);
    console.log(filter[1]);
  }

  if(confirm("Would you like lowercase letters in your password?"))
  {
    console.log("lowercase letters: true");
    filter.push(true);
    console.log(filter[2]);
  }

  else 
  {
    console.log("lowercase letters: false");
    filter.push(false);
    console.log(filter[2]);
  }

  if(confirm("Would you like uppercase letters in your password?"))
  {
    console.log("uppercase letters: true");
    filter.push(true);
    console.log(filter[3]);
  }

  else
  {
    console.log("lowercase letters: false")
    filter.push(false);
    console.log(filter[3]);
  }

  return filter;
}

function createPassword(filter, length)
{
  var final = [];
  var pass = "";

    if(filter[0] === true)
    {
      var specialCharacters = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~", '"', "'"];
      final = final.concat(specialCharacters);
    }

    if(filter[1] === true)
    {
      var numberValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
      final = final.concat(numberValues);
    }

    if(filter[2] === true)
    {
      var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      final = final.concat(lowerCase);
    }

    if(filter[3] === true)
    {
      var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());
      final = final.concat(upperCase);
    }

    for (var i = 0; i < length; i++)
    {
      pass += final[Math.floor(Math.random()*final.length)]
    }

    return pass;
}
