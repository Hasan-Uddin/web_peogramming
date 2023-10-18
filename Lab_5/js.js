function clickDuke() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const phoneN = document.getElementById("phone").value;
  const add = document.getElementById("add").value;

  firstName(fname);
  last_name(lname);
  password(pass);
  emailID(email);
  phone(phoneN);
  address(add);
}

function firstName(a) {
  console.log("Hey there " + a);
  if (a.length < 6) {
    alert("name must not be less than 6 char");
    return;
  }
  if (!isAlphabet(a)) {
    alert("Name must be [a-z/A-Z]");
    return;
  }
}

function last_name(l) {
  if (l.length < 1) {
    alert("Last name must not be Empty");
    return;
  }
}
function password(p) {
  if (p.length < 6) {
    alert("Password must not be less than 6 char");
    return;
  }
}

function emailID(e) {
  if (e.length < 1 || !isValidEmail(e)) {
    alert("Please Enter a valid email");
    return;
  }
}

function phone(p) {
  if (p.length != 10) {
    alert("Phone Number should contain 10 digits only");
    return;
  }
}

function address(a) {
  if (a.length < 1) {
    alert("Address name must not be Empty");
    return;
  }
}

function isValidEmail(e) {
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailPattern.test(e);
}

function isAlphabet(str) {
  return /^[A-Z]+$/i.test(str);
}
