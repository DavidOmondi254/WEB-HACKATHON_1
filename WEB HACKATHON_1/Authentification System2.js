function validate()
{
    var username=document.getElementById("username").Value
    var email=document.getElementById("email").Value
    var password=document.getElementById("password").Value
    if(username=="admin"&& password=="user"&& email=="davidomondi842@gmail.com")
    {
        alert("Login Succesfully");
        return false;
    }
    else
    {
        alert("Login Fail");
    }
}