$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();
    
    var error=true;
    var password_error=true;
    var confirm_password_error=true;
    var confirm_email_error = true;

    $('#username').keyup(function(){
        username_validation();
    });

    function username_validation(){
        var username_val = $('#username').val();
        if(username_val.length==''){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Cannot be empty');
            $('#usernamevalidation').css('color','red');
            error=false;
            return false;
        }
        else{

            $('#usernamevalidation').hide();
        }
        if(username_val.length<4){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Should have altleast 4 characters');
            $('#usernamevalidation').css('color','red');
            error=false;
            return false;
        }
        else{

            $('#usernamevalidation').hide();
        }
    }
    $('#password').keyup(function(){
        password_validation();
    });
    
    function password_validation(){
        var password_val = $('#password').val();
        if(password_val.length==''){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Passsword cannot be empty');
            $('#passwordvalidation').css('color','red');
            password_error=false;
            return false;
        }
        else{

            $('#passwordvalidation').hide();
        }
        if(password_val.length<7){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Please type password in correct format');
            $('#passwordvalidation').css('color','red');
            password_error=false;
            return false;
        }
        else{

            $('#passwordvalidation').hide();
        }
    }
    $('#confirmpassword').keyup(function(){
        confirm_password();
    });
    function confirm_password(){
        var confirm_password_val = $('#confirmpassword').val();
        var password_val = $('#password').val();
        if(password_val!=confirm_password_val){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password did not match');
            $('#confirmpasswordvalidation').css('color','red');
            confirm_password_error=false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();
        }
    }

    $('#email').keyup(function(){
        email_validation();
    });
    function email_validation(){
        var email_val = $('#email').val();
        if(email_val.length==''){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email cannot be empty');
            $('#emailvalidation').css('color','red');
            confirm_email_error=false;
            return false;
        }
        else{

            $('#emailvalidation').hide();
        }
        if(email_val.length<4){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email Should be valid');
            $('#emailvalidation').css('color','red');
            confirm_email_error=false;
            return false;
        }
        else{

            $('#emailvalidation').hide();
        }
    }

    $('#submitvalidation').click(function(){
         username_validation();
         password_validation();
         confirm_password();

         if(error==true && password_error==true && confirm_password_error==true && confirm_email_error==true){
            return true;
         }
         else{
            return false;
         }

    });
    
   

    
});
