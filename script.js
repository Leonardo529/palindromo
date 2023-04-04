function verificarPalindromo() {
    
    var numero = document.getElementById("numero").value;
    var numero_inverso = numero.split("").reverse().join("");

    if (numero == numero_inverso) {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-success' <p>Sim, é palíndromo!</p>";
  } 
  else {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger' <p>Não é palíndromo!</p>";
  }
}
