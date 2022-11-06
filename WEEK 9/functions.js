function emailVerify(email){
    let id = email.value;
    let pattern = /^[a-zA-Z]\w*@(gmail.com|cvr.ac.in)$/
    if(pattern.test(id) == false){
        alert("Invalid Email");
        email.value = "";
    }
    else
        alert("Valid Email");
}

function dobVerify(dob){
    let val = dob.value;
    let pattern = /^(0?[1-9]|[12]\d|3[01])(\/|\-|\.)(0?[1-9]|1[012])\2\d{4}$/
    if(pattern.test(val) == false){
        alert("Invalid DOB");
        dob.value = "";
    }
    else
        alert("Valid DOB");
}

function phoneVerify(phone){
    let val = phone.value;
    let pattern = /^[6-9]\d{9}$/
    if(pattern.test(val) == false){
        alert("Invalid phone number");
        phone.value = "";
    }
    else
        alert("Valid phone number");
}

function passVerify(pass){
    let val = pass.value;
    let pattern = /^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,}$/
    if(pattern.test(val) == false){
        alert("Invalid password");
        pass.value = "";
    }
    else
        alert("Valid password");
}