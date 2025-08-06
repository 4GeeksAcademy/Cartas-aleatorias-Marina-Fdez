function generarCarta() {
  const palos = ["♠", "♣", "♥", "♦"];
  const numerosCarta = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const palo = palos[Math.floor(Math.random() * palos.length)];
  const numero = numerosCarta[Math.floor(Math.random() * numerosCarta.length)];

  const esRojo = palo === "♥" || palo === "♦";
  const colorClase = esRojo ? "red" : "black";

  const cartaDiv = document.createElement("div");
  cartaDiv.className = `carta ${colorClase}`;
  
  const esquinaSuperior = document.createElement("div");
  esquinaSuperior.className = "corner top-left";
  const numeroArriba = document.createElement("span");
  numeroArriba.textContent = numero;
  const paloArriba = document.createElement("span");
  paloArriba.textContent = palo;
  esquinaSuperior.appendChild(numeroArriba);
  esquinaSuperior.appendChild(paloArriba);

  const centro = document.createElement("div");
  centro.className = "center";
  centro.textContent = numero;

  const esquinaInferior = document.createElement("div");
  esquinaInferior.className = "corner bottom-right";
  const numeroAbajo = document.createElement("span");
  numeroAbajo.textContent = numero;
  const paloAbajo = document.createElement("span");
  paloAbajo.textContent = palo;
  esquinaInferior.appendChild(numeroAbajo);
  esquinaInferior.appendChild(paloAbajo);

  cartaDiv.appendChild(esquinaSuperior);
  cartaDiv.appendChild(centro);
  cartaDiv.appendChild(esquinaInferior);

  // Mostramos la carta en pantalla
  const contenedor = document.getElementById("contenedorCarta");
  contenedor.innerHTML = "";
  contenedor.appendChild(cartaDiv);
}

window.onload = function () {
  generarCarta();
  document.getElementById("botonGenerar").addEventListener("click", generarCarta);
};
