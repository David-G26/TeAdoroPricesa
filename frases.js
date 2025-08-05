const frases = [
  "Te amo muchísimo, mi berrinchuda linda 🥺💗",
  "Pinsheshita, sos lo más bonito que tengo 💞",
  "Ángela, tu sonrisa me arregla el día ☀️",
  "Mi berrinchuda favorita, sos mi paz y mi caos 🌷",
  "No hay nadie como vos, mi pinsheshita hermosa 💘",
  "Ángela, cada mensaje tuyo me hace sonreír 🌸",
  "Te amo más de lo que puedo explicar, berrinchuda 💖",
  "Mi pinsheshita, quiero cuidarte siempre 🫶",
  "Ángela, sos mi personita especial 💌",
  "Berrinchuda preciosa, sos un sueño hecho realidad ✨",
  "Pinsheshita, no me canso de pensar en vos 😍",
  "Ángela, vos hacés que todo tenga sentido 🌈",
  "Mi berrinchuda hermosa, te extraño cada segundo 😢",
  "Te amo infinito, mi pinsheshita del corazón 💓",
  "Ángela, quiero un futuro con vos 🏡💍",
  "Berrinchuda mimada, soy feliz con solo leerte 📲💕",
  "Pinsheshita, cada día me gustás más 🌺",
  "Ángela, sos mi lugar seguro 🌻",
  "Berrinchuda, te amo más que a nada en este mundo 🌍❤️",
  "Pinsheshita tierna, nunca me sueltes 🥹"
];

function crearFrase(x, y) {
  const frase = document.createElement('div');
  frase.className = 'frase';
  frase.textContent = frases[Math.floor(Math.random() * frases.length)];
  frase.style.left = `${x}px`;
  frase.style.top = `${y}px`;
  document.body.appendChild(frase);

  setTimeout(() => {
    frase.remove();
  }, 3000);
}

document.addEventListener('mousemove', e => crearFrase(e.clientX, e.clientY));
document.addEventListener('touchmove', e => {
  const touch = e.touches[0];
  crearFrase(touch.clientX, touch.clientY);
});
