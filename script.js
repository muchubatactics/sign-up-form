const pwd = document.getElementById("pwd");
const conPwd = document.getElementById("cfm-pwd");

const parent = document.getElementById("myform");

let errormsg = document.createElement("p");
errormsg.textContent = "*The passwords don't match";
errormsg.style = "margin-top: 5px;color:red; font-size: 0.5rem";

let errormsg2 = document.createElement("p");
errormsg2.textContent = "*The password should be greater than 7 characters";
errormsg2.style = "margin-top: 5px;color:red; font-size: 0.5rem";

pwd.addEventListener("input", () => {
    if(pwd.value.length < 8)
    {
        pwd.classList.add("error");
        parent.appendChild(errormsg2);
    }
    else
    {
        pwd.classList.remove("error");
        parent.removeChild(errormsg2);
    }
})

conPwd.addEventListener("input", () => {
    if(pwd.value != conPwd.value)
    {
        pwd.classList.add("error");
        conPwd.classList.add("error");
       
        parent.appendChild(errormsg);
    }
    else
    {
        pwd.classList.remove("error");
        conPwd.classList.remove("error");

        parent.removeChild(errormsg);
    }
});