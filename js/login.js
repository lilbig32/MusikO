document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "admin123") {

    window.location.href = "Админ панель.html";
  } 
  
  else if (username === "klient" && password === "klient") {

      window.location.href = "Личный кабинет.html";
    }else {
    alert("Неверный логин или пароль, попробуйте еще раз.");
  }
});