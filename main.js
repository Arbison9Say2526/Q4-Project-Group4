let attempt_counter = 0;


function LogUser() {
   // 1. Get references to the elements
   let username = document.getElementById("username").value;
   let password = document.getElementById("password").value;
   let display = document.getElementById("display"); // Target the error message area
   let loginBtn = document.getElementById("loginBTN");


   // 2. Declare your strings
   let granted = "Welcome, " + username + "!";
   let denied = "Access denied. Account locked after 3 attempts!";


   // 3. Logic Check
   if (username === "KPasco" && password === "9Sapphire") {
       alert(granted);
       attempt_counter = 0;
       window.location.href = "ahomepage.html";
   } else {
       attempt_counter++;
      
       // Check if we hit the limit
       if (attempt_counter >= 3) {
           alert(denied);
           loginBtn.disabled = true;
           display.innerHTML = "<b>ACCOUNT LOCKED</b>";
       } else {
           display.innerHTML = "Incorrect credentials. Attempt " + attempt_counter + " of 3";
       }
   }
}
