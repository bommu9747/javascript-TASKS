function validation(){

var uid = document.getElementById('ID')
var passid = document.getElementById('psw').value;
var uname = document.getElementById('name')
var uadd = document.getElementById('address')
var ucountry = document.getElementById('country')
var uzip = document.getElementById ('ZipCode')
var uemail = document.getElementById ('email')
var ugender= document.getElementById ('gender').value;
// var ufsex = document.getElementById('fsex')
var language = document.getElementById ('english')
var about=document.getElementById('disabout')
if(uid.value=="")
{
    alert("enter your id")
return false;
}
if(passid==""){
    alert("enter your password")
return false;
}
if((passid.length<=8)|| (passid.length>=12)){
    alert("maximum 12 word")
    return false;
}
if(uname.value==""){
    alert("enter your name")
    return false;
}
    if(uadd.value==""){
        alert("enter your address")
    return false;
}
        if(ucountry.selected==""){
            alert("select country")
        return false;
   
}
    if(uzip.value==""){
        alert("enter zipcode")
        return false;
    }

 if(uemail.value==""){
         alert("enter your email")
         return false;
//     return false;}
    // if(umsex.checked==""){
    //      alert("  select sex")
    //  return false;
  }
//  if(ugender==""){
//     alert(" select sex")
//     return false;
// }

if ( ( document.register.sex[0].checked == false )
&& ( document.register.sex[1].checked == false ))
{
 alert("select gender")
 return false;
}


if(language.checked==""){
    alert("select language")
    return false;
}
if(about.value==""){
    alert("enter your feedback")
    return false;}
}
 
