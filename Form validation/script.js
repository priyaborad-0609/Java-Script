$("#btn").on("click",function() {
    const emailvalidator =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    const passwordvalidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const email = $("#email").val();
    const password = $("#password").val();
    const confirm_password = $("#confirm_password").val();
    isvalid = true;

    console.log(email, password, confirm_password);

    if(email === "" || !emailvalidator.test(email)) 
    {
        $("#error").text("Email is invalid !");
        isvalid = false;
    }

    if (password === "" || confirm_password === "" || !passwordvalidator.test(password))
    {
        isvalid = false;
        $("#error1").text("Password not accepted !");     
    }

    if(password != confirm_password) {
        isvalid = false;
      $("#error1").text("Password not same !");      
    }
    if(isvalid){
        $("#status").text("Sign up Sucessfully !");
    }
    else{
        $("#status").text("Sign up Failed");
    }
});
