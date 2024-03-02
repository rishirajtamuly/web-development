function validation() {

    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    var mnum = document.getElementById("mnum").value;
    var email = document.getElementById("email").value;
    var valid = true;

    // Username validation 
    if (user.trim() == "") {
        document.getElementById("username").innerHTML = "Username is required";
        valid = false;
    } else {
        document.getElementById("username").innerHTML = "";
    }
    
    // Password validation
    if (pass.trim() == "") {
        document.getElementById("password").innerHTML = "Password is required";
        valid = false;
    } else {
        document.getElementById("password").innerHTML = "";
    }

    // confirm password validation
    if (cpass.trim() == "") {
        document.getElementById("confirmpassword").innerHTML = "Confirm Password is required";
        valid = false;
    } else {
        document.getElementById("confirmpassword").innerHTML = "";
    }

    // Mobile Number validation
    if (mnum.trim() == "") {
        document.getElementById("mobilenumber").innerHTML = "Mobile Number is required";
        valid = false;
    } else {
        document.getElementById("mobilenumber").innerHTML = "";
    }

    // Email validation
    if (email.trim() == "") {
        document.getElementById("youremail").innerHTML = "Email is required";
        valid = false;
    } else {
        document.getElementById("youremail").innerHTML = "";
    }

    return valid;
}