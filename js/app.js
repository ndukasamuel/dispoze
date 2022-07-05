function isFilled(){
    let surname = document.querySelector('#surname').value;
    let password = document.querySelector('#password').value;
    let repassword = document.querySelector('#repassword').value;
    let phonenumber = document.querySelector('#phonenumber').value;
    let email = document.querySelector('#email').value;
    if( surname !=="" && password !== "" && phonenumber !== ""&& email !== ""  && repassword !== ""){
        document.getElementById('btn').removeAttribute('disabled');
        document.getElementById('btn').style.background ='#17A200';
    }
}

isFilled();

const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });

const retogglePassword = document.querySelector("#retogglePassword");
        const repassword = document.querySelector("#repassword");

        retogglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "repassword" ? "text" : "repassword";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });