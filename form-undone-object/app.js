
function signUpInformation() {

  var userName = document.getElementById("userName").value;
  var userEmail = document.getElementById("userEmail").value;
  var userPassword = document.getElementById("userPassword").value;

  let user = {
    name: userName,
    email: userEmail,
    password: userPassword,
  }

  // localStorage.setItem("name", JSON.stringify(users));


  const Http = new XMLHttpRequest();
  const url = 'http://localhost:3000/signUpInformation';
  Http.open("POST", url);

  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(user));

  Http.onreadystatechange = () => {
    // Http.res(Http.responseText);
    document.getElementById("abc").innerHTML= Http.responseText ;
    // alert(Http.responseText);
  }
  return false;
}
