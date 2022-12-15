
    function phnecheck() {
        var ph = document.getElementById("phne").value;
        let pErr = document.getElementById("phErr");
        var phreg = /^[0-9]{10}$/
        if (phreg.test(ph)) {
             alert("valid");
            pErr.innerHTML = " ";
        }
        else {
            alert("invalid");


            pErr.style.color = "red";
            pErr.innerHTML = "invalid";

        }
        return ph;
    }
    function mailchk() {
        var mail = document.getElementById("mailid").value;
        let merr = document.getElementById("mErr");
        var mreg = /^[a-z]+[0-9]*\@(gmail.com|cvr.ac.in|yahoo.com)$/
        if (mreg.test(mail)) {
            merr.innerText = " ";
        }
        else {
            merr.style.color = "red";
            merr.innerText = "enter valid id ";
        }
        return mail  ;
    }
    function namechk() {
        var nam = document.getElementById("name").value;
        let nerr = document.getElementById("nErr");
        var nreg = /^[a-z]+\s[a-z]*$/
        if (nreg.test(nam))
            nerr.innerText = " ";
        else {
            nerr.style.color = "red";
            nerr.innerText = "enter valid username ";
        }
        return nam ;
    }
    function passchk() {
        var pass = document.getElementById("pword").value;
        let perr = document.getElementById("pErr");
        var preg = /^[A-Z]\w{9,12}$/
        if (preg.test(pass)) {
            perr.innerHTML = "";
        }
        else {
            // alert("password must start with cap letter,must contain one digit");
            perr.style.color = "red";
            perr.innerHTML = "password must start with cap letter,must contain one digit and of  length 9-12";
        }
        return pass;
    }
    function final()
    {
        let n=namechk(),p=phnecheck(),m=mailchk(),pa=passchk();
      //  let p=phnecheck();
      //  let m=mailchk();
        if(n==''&&p==''&&m==""&&pa=="")
        alert("fill all the details")
    }


