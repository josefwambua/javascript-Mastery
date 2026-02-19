// Create a user object with:
// username

// isLoggedIn

// Methods:

// login()

// logout()
let user  = {
    username: "admin",
    loggedIn : true,


login: function(){
    this.loggedIn = false;
    console.log(this.username + " logged in");
},
logout: function(){
    this.loggedIn =  false;

    console.log(this.username + " logged out")
}
}
user.login()
user.logout()
