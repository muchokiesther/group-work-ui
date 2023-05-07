interface Userinfo {
  Usersemail: string;
  Userfullname: string;
  Username: string;
  PasswordII: string;
  password: string;
}


class Users{
    async Showusers(){
    const response = await fetch (' http://localhost:3000/users');
    const users = await response.json()
  //console.log(users);

    }
}
new Users().Showusers()

class UserData{

    

    async adddata(input: Userinfo)
    {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    const result = await response.json();
    console.log(result);
  }
}



const addButton = document.querySelector("#signupbtn") as HTMLButtonElement;
addButton.addEventListener("click",  async (e:Event)=> {
  e.preventDefault(); 
  const Usersemail= document.querySelector("#username1") as HTMLInputElement;
  const Userfullname = document.querySelector("#username2") as HTMLInputElement;
  const Username= document.querySelector("#username3") as HTMLInputElement;
  const PasswordII = document.querySelector("#passwordII") as HTMLInputElement;
  const password = document.querySelector("#password") as HTMLInputElement;

  async function checkIfUserExists() {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    const foundUser = users.find((user: any) => user.Username === Username.value);

    if (foundUser) {
      alert('User already exists!');
      return true;
    }

    return false;
  }

  const userExists = await checkIfUserExists();
  if (userExists) {
    return;
  }



  if (Usersemail.value === '' || Userfullname.value === '' || Username.value === '' || PasswordII.value === '' || password.value === '') {
    e.preventDefault(); 
    alert('Please fill all fields before submitting.');
    return;
  }

  if (PasswordII.value !== password.value){
    e.preventDefault(); 
    alert('please make sure your passwords match');
    return;
    
  }

  const input: Userinfo = {
    
    Usersemail:Usersemail.value,
    Userfullname: Userfullname.value,
    Username: Username.value,
    PasswordII: PasswordII.value,
    password: password.value,
  };
  new UserData().adddata(input);
})



  // async function fetchusersdb(){
  //   let response= await fetch("http://localhost:3000/users")
  //   let fetchedusers=await response.json()
  //   console.log(fetchedusers)
  //   fetchedusers.forEach((element:any)=> 
  //     const Username= document.querySelector("#username3") as HTMLInputElement;
 
  //     let userExist=fetchedusers.find((element :{Username:string})=>element.Username=== Username)

      

  //   let founduser=fetchedusers.find((users:any)=>{
  //      users.Username===Username
  //   })
  //   if (founduser){
  //     e.preventDefault(); 
  //     alert('user in db')
  //   }
  //   else{
  //      e.preventDefault(); 
  //     alert('new user')
  //   }
  //  }
  //  fetchusersdb();

  

// class Collectdata{
//   async Udata(input: Userinfo)
//   {
//     const response = await fetch("http://localhost:3000/users", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(input),
//     });
//     const result = await response.json();
//     console.log(result);
//   }
// }

// new Collectdata().Udata(user);