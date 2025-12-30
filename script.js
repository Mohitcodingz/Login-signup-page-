signup = () => {
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let emailinput = document.getElementById("email").value;
    let username = document.getElementById("username").value;

    if (password === "" || password2 === "" || emailinput === "" || username === "") {
        alert("Please fill all fields");
        return
    }
    else if (password !== password2) {
        alert("Re-Enter Your password correctly"); return
    }
    else if (!/@gmail\.com$/.test(emailinput)) {
        alert("Please use @gmail.com at the end");
        return
    }
    else {
        localStorage.setItem("Username", username);
        localStorage.setItem("Mail", emailinput);
        sessionStorage.setItem("password1", password);
        alert(" Sign up successfull");
        window.location.href = "login.html"
        return
    }
}

login = () => {
    let email = document.getElementById("Login-email").value;
    let password = document.getElementById("Login-password").value;
    let storedemail = localStorage.getItem("Mail");
    let storedpassword = sessionStorage.getItem("password1");
    let storedusername = localStorage.getItem("Username");

    if (email === storedemail && password === storedpassword) {
        alert("Welcome Back " + storedusername);
    }
    else {
        alert("Invalid credintials")
    }
}

document.querySelectorAll("a, button").forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
        btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
    });
});

/*
document.querySelectorAll is used for selecting all the anchor tag and then 
We run for each using btn variable 
*/
