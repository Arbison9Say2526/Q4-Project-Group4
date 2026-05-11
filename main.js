// function logUser(){


//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;






//     if  (username === "almakramjr" && password === "KeaneCodyBasty")
//         {
//         window.location.href = "ahomepage.html"




//     }
//     else{
//         document.getElementById("output").innerHTML = "<h1>Hell no, get out!</h1>";}
// }




// let attempt_counter = 0;


// function LogUser() {
//     //  username, password, granted, denied;
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     granted= "Welcome, " + username + "!";
//     denied = "Access denied. "  + "Account locked after " + "3 attempts!";


//     do {
      
//         if (username === "almakramjr" && password === "KeaneCodyBasty") {
//             alert(granted);
//             attempt_counter = 0;
//             document.getElementById("display").innerHTML = "";
//             window.location.href = 'ahomepage.html';
//             break;
//         } else {
//             attempt_counter++;
//             document.getElementById("display").innerHTML =
//                 "Incorrect username and/or password. Attempt " + attempt_counter + " of 3 ";
//         }


//     } while (false);


//     if (attempt_counter >= 3) {
//         alert(denied);
//         document.getElementById("login").disabled = true; // lock button
//     }
// }


let attempt_counter = 0;


function LogUser() { 
    event.preventDefault(); // This stops the page from refreshing!

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let display = document.getElementById("display");
    let login = document.getElementById("login");

    if (username === "almakramjr" && password === "KeaneCodyBasty") {
        
        alert("Welcome, " + username + "!");
        attempt_counter = 0;
        window.location.href = 'dashboard.html';   
        
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
