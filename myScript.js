function validateForm() {
let a = document.forms["myForm"]["fname"].value;
  if (a == "") {
    alert("Name must be filled out");
    return false;
  }
  let b = document.forms["myForm"]["lname"].value;
  if (b == "") {
    alert("Name must be filled out");
    return false;
  }
  let c = document.forms["myForm"]["birthday"].value;
  if (c == "") {
    alert("DOB must be filled out");
    return false;
  }
  let d = document.forms["myForm"]["phone"].value;
  if (d == "") {
    alert("Phone must be filled out");
    return false;
  }
  let e = document.forms["myForm"]["email"].value;
  if (e == "") {
    alert("email must be filled out");
    return false;
  }

  let f = document.forms["myForm"]["psw"].value;
  if (f == "") {
    alert("email must be filled out");
    return false;
  }
}

function verifyPassword() {  
    var pw = document.forms("psw").value;  
    //check empty password field  
    if(pw == "") {  
       alert("**Fill the password please!");  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
  }  