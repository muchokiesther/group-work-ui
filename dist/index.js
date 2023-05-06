"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class logins {
    Showuser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("http://localhost:3000/users");
            const users = yield response.json();
            const user = users.find((u) => u.Username === username);
            if (user && user.password === password) {
                // If the username and password match, redirect the user to another page
                window.location.href = "oops.html";
            }
            else {
                alert("Username or password is incorrect.");
            }
            if (username === "admin") {
                window.location.href = "register.html";
            }
        });
    }
}
const loginForm = document.getElementById("login-form");
// Add an event listener to the form's submit event
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Get the username and password input values from the form
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const username = usernameInput.value;
    const password = passwordInput.value;
    // Call the authenticateUser function and pass in the username, password, and event
    new logins().Showuser(username, password);
});
