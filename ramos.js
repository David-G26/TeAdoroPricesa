function verificarContraseña() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("mensaje-error");
  const login = document.getElementById("login-container");
  const regalo = document.getElementById("regalo-container");

  if (password === "pinsheshita") {
    login.classList.add("hidden");
    regalo.classList.remove("hidden");
  } else {
    error.textContent = "Esa no es la clave, mi amor 💔";
  }
}
