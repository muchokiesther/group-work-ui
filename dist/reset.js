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
class UserReset {
    static updatePassword(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:3000/users/${id}`);
            const user = yield response.json();
            if (!user) {
                throw new Error("User not found");
            }
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmpassword").value;
            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            user.password = password;
            yield fetch(`http://localhost:3000/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("updated");
        });
    }
}
const passwordResetForm = document.getElementById("sentbtn");
passwordResetForm.addEventListener("submit", UserReset.updatePassword);
//   const userReset = new UserReset();
//   try {
//     await userReset.updatePassword;
//     alert("Password reset successful");
//   } catch (error) {
//       alert(`Password reset failed: ${error}`);
//   }
// });
//   async function forgotPassword(username: string, newPassword: string) {
//     const userReset = new UserReset();
//     const response = await fetch(`http://localhost:3000/users/${username}`);
//     const user = await response.json();
//   }
//     if (!user) {
//       alert("User not found");
//       return;
//     }
//     await userReset.updatePassword(username, newPassword);
//   }
//   const passwordResetForm = document.getElementById("password-reset-form") as HTMLButtonElement;
//   passwordResetForm.addEventListener("submit", async (event) => {
//     event.preventDefault(); 
//   const PasswordII = document.querySelector("#passwordII") as HTMLInputElement;
//   const password = document.querySelector("#password") as HTMLInputElement;
//     if (password !== PasswordII) {
//       alert("Passwords do not match");
//       return;
//     }
//     alert("Password reset successful");
//   });
