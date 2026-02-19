<<<<<<< HEAD
let user = {
    username: "admin",
    loggedIn: false,

    login: function () {
        this.loggedIn = true;
        console.log(this.username + " logged in");
    },

    logout: function () {
        this.loggedIn = false;
        console.log(this.username + " logged out");
    }
};
user.login();
user.logout();
=======
let user = {
    username: "admin",
    loggedIn: false,

    login: function () {
        this.loggedIn = true;
        console.log(this.username + " logged in");
    },

    logout: function () {
        this.loggedIn = false;
        console.log(this.username + " logged out");
    }
};

login();
logout();
>>>>>>> ae784cb (updated)
