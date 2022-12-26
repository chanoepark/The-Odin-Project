/* Referenced W3Schools: https://www.w3schools.com/howto/howto_js_password_validation.asp */

const passwordInput = document.getElementById('password');
const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('number');
const length = document.getElementById('length');
const passwordConfirm = document.getElementById('confirm_password');
const confirmation = document.getElementById('confirmation');

// When the user clicks on the password field, show the message box
passwordInput.onfocus = function() {
    document.getElementById('password-validation').style.display = "block";
}

passwordConfirm.onfocus = function() {
  document.getElementById('password-confirm').style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
passwordInput.onblur = function() {
  document.getElementById('password-validation').style.display = "none";
}

passwordConfirm.onblur = function() {
  document.getElementById('password-confirm').style.display = "none";
}

// When the user starts to type something inside the password field
passwordInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if (passwordInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  var upperCaseLetters = /[A-Z]/g;
  if (passwordInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if (passwordInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  if (passwordInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

passwordConfirm.onkeyup = function() {
  if (!passwordConfirm.value.localeCompare(passwordInput.value)) {
    confirmation.classList.remove("invalid");
    confirmation.classList.add("valid");
  } else {
    confirmation.classList.remove("valid");
    confirmation.classList.add("invalid");
  }
}