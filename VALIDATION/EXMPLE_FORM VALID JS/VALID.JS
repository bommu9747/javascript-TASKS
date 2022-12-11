function validation(){
var firstname = document.getElementById('firstname')
var secandname = document.getElementById('secandname')
var email = document.getElementById('inputEmail')
var password= document.getElementById('inputPassword4')
var address = document.getElementById('inputAddress')
var address2 = document.getElementById('inputAddress2')
var city = document.getElementById('inputCity')
var state = document.getElementById('inputState')
if(firstname.value==""){
    alert("enter your firstname")}
     if(secandname.value==""){
        alert("enter your secand name")}
     if(email.value==""){
        alert("enter your email ")}
         if(password.value==""){
            alert("enter your password")}
         if(address.value==""){
            alert("enter your address")}
             if(address2.value==""){
                alert("enter your secand address")}
                 if(city.value==""){
                    alert("enter your city name")}
                     if(stateselect(state)){
                        // alert("select country")
                    }
}
                    // if(stateselect.value == "Default")
                    // {
                    // alert('Select your state from the list');
                    // stateselect.focus();
                    // return false;
                    // }
                    // else
                    // {
                    // return true;
                    // }
                    // }




