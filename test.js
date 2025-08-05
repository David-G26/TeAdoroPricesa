document.getElementById("test-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const respuestas = {
    q1: "correct",
    q2: "correct",
    q3: "correct",
    q4: "correct",
    q5: "correct"
  };

  let score = 0;
  for (const key in respuestas) {
    const respuestaSeleccionada = document.querySelector(`input[name="${key}"]:checked`);
    if (respuestaSeleccionada && respuestaSeleccionada.value === respuestas[key]) {
      score++;
    }
  }

  const resultado = document.getElementById("resultado");
  resultado.classList.remove("hidden");

  if (score === 5) {
    resultado.innerText = `¡Perfecto mi pinsheshita! 💘 Acertaste TODO. Te amo muchísimo 💖✨`;
  } else if (score >= 3) {
    resultado.innerText = `Muy bien mi amor 💗 Acertaste ${score} de 5. Pero te sigo amando como siempre 💕`;
  } else {
    resultado.innerText = `Hmm... acertaste solo ${score} 😢 Pero no importa, sos mi berrinchuda favorita igual 💞`;
  }
});
