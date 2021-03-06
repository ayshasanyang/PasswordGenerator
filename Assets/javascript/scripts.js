
   var length = Number(prompt("How many characters would you like your password to be?"));
   while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
   
   var uppers = confirm("Would you like to use uppercase letters?");
   var lowers = confirm("Would you like to use lowercase letters?");
   var numbers = confirm("Would you like to use numbers?");
   var symbols = confirm("Would you like to use special characters?");
   
   while (!uppers && !lowers && !numbers && !symbols) {
     alert("You must select at least one character type!");
     uppers = confirm("Would you like to use uppercase letters?");
     lowers = confirm("Would you like to use lowercase letters?");
     numbers = confirm("Would you like to use numbers?");
     symbols = confirm("Would you like to use special characters?");
   }
   
   
   window.addEventListener('load', function() {
     generateNewPassword();
   });
   
   //function to generate password
   function generateNewPassword() {
     var password = "";
   
     var allowed = {};
     if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
     if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
     if (numbers) password += rando(allowed.numbers = "1234567890");
     if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");


    //create for loop to choose password character 
    for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);
   
    document.getElementById("password").value = randoSequence(password).join("");
   }

   //function to copy password to clipboard
   function copyPassword(){

    document.getElementById("password").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");
}



