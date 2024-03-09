const h1 = document.querySelector("h1");
h1.textContent = "BIENVENIDO ";

document.addEventListener("DOMContentLoaded", function () {
  const contador = document.getElementById("contadorVisitas");
  const boton = document.getElementById("btnReestablecer");

  let visitas = localStorage.getItem("visitas") ?? 0;
  contador.textContent = visitas;

  visitas++;
  contador.textContent = visitas;
  localStorage.setItem("visitas", visitas);

  boton.addEventListener("click", function () {
    visitas = 0;
    contador.textContent = visitas;
    localStorage.setItem("visitas", visitas);
  });
});
