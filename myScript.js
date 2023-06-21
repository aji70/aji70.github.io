let x = document.forms["myForm"]["fname"]["lname"]["birthday"]["phone"]["email"]["psw"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }