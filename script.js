// Relógio contador
function atualizarTempo() {
  const dataInicio = new Date("2025-07-16T00:00:00"); 
  const agora = new Date();

  const diferenca = agora - dataInicio;

  const segundos = Math.floor(diferenca / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  const horasRestantes = horas % 24;
  const minutosRestantes = minutos % 60;
  const segundosRestantes = segundos % 60;

  document.getElementById("tempo").textContent =
    `${dias} dias • ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`;
}
setInterval(atualizarTempo, 1000);
atualizarTempo();

// Animação de aparecer no scroll
const elementos = document.querySelectorAll('.fade-in');
function animarScroll() {
  const topoTela = window.scrollY + window.innerHeight;
  elementos.forEach(el => {
    if (el.offsetTop < topoTela - 50) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animarScroll);
animarScroll();

// Corações caindo
function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💙";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => { heart.remove(); }, 10000);
}
setInterval(criarCoracao, 500);



function abrirCarta() {
  const carta = document.getElementById("conteudo-carta");
  carta.style.display = "block";
}
