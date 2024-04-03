// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var specialCharacters = "!@#$%^&*()"
  var numbers = "1234567890"
  var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz"
  var uppercaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var allChars = "lowercaseAlpha + uppercaseAlpha + numbers + specialCharacters"
  var randomKey = "";

  var passwordLength = prompt(
    "Start by choosing your Password Length"
  );
  if (passwordLength < 8){
    alert("Sorry, password length should be 8 characters.")
    return;
  }
  if (passwordLength > 128) {
    alert("Sorry, password length should be no more that 128 characters")
    return;
  } else {
    var promptspecialCharacters = confirm("Would you like your password to include Special Characters");
    var promptnumbers = confirm("Would you like your password to include Numbers");
    var promptlowercaseAlpha = confirm("Would you like your password to include Lowercase Letters");
    var promptuppercaseAlpha = confirm("Would you like your password to include Uppercase Letters");
  }

  if (promptspecialCharacters) {allChars += specialCharacters;}
  if (promptnumbers) {allChars += numbers;}
  if (promptlowercaseAlpha) {allChars += lowercaseAlpha;}
  if (promptuppercaseAlpha) {allChars += uppercaseAlpha;}

  for (i= 0; i < passwordLength; i++) {
    randomKey += allChars[Math.floor(Math.random() * allChars.length)]
  }
  return(randomKey);
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
