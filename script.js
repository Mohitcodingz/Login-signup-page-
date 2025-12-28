signup = () => {
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let username = document.getElementById("username").value;
    if (password !== password2) {
        alert("Re-Enter Your password correctly"); return
    }
    else {
        localStorage.setItem("username1", username);
        sessionStorage.setItem("password1", password);
        alert(" Sign up successfull")
    }
}
login = () => {
    let username = document.getElementById("Login-username").value;
    let password = document.getElementById("Login-password").value;
 let storedusername = localStorage.getItem("username1");
 let storedpassword = sessionStorage.getItem("password1");

    if (username === storedusername && password === storedpassword) {
        alert("Welcome Back " + storedusername);
        return  
    }
    else{
        alert("Invalid credintials")
    }
}

