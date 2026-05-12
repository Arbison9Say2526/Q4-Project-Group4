let attempt_counter = 0;


function LogUser() {
    
    // 1. Get references to the elements
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let display = document.getElementById("display");
    let login = document.getElementById("login");

    if (username === "KPasco" && password === "9Sapphire") {
        
        alert("Welcome, " + username + "!");
        attempt_counter = 0;
        window.location.href = 'ahomepage.html';  
        
    } else {
        attempt_counter++;
        
        if (attempt_counter >= 3) {
            alert("Access denied. Account locked after 3 attempts!");
            login.disabled = true;
            display.innerHTML = "ACCOUNT LOCKED";
        } else {
            display.innerHTML = "Wrong username or password! Attempt " + attempt_counter + " of 3";
        }
    }
}
