document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");
  const sucesso = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
      sucesso.style.display = "block";
      form.reset();
    }
  });
});