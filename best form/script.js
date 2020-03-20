function valid() {
    var name = document.getElementById("num").value;
    var password = document.getElementById("pass").value;

    if (name.length < 4 || name.value == '') {
        document.getElementById("dem").innerHTML = "name is rquired";
        return false;
    } else if (password.length <= 7) {
        document.getElementById("demo").innerHTML = "Password is reuired at least 8";
        return false;
    } 
    else{
        return true;
    }
}