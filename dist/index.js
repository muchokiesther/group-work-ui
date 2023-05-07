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
    static Showuser() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("http://localhost:3000/users");
            const users = yield response.json();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            console.log(username, password);
            for (let user of users) {
                if (username === user.userName) {
                    console.log(user.userName);
                }
                //  && password === user.password 
                //   // If the username and password match, redirect the user to another page
                //   window.location.href = "oops.html";
                //   return false;
                // // } else{
                //   alert("Username or password is incorrect.");
                //   return;
                // }
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
    logins.Showuser();
});
