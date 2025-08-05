const moments = [
  "Estaríamos abrazados viendo películas hasta quedarnos dormidos 💤🍿",
  "Te estaría dando un beso en la frente mientras te cuento cómo fue mi día 😚",
  "Estaríamos paseando de la mano por un parque lleno de flores 🌸🌼",
  "Te haría reír hasta que te duela la panza 🤭❤️",
  "Estaríamos en mi cuarto, escuchando música de Milo J y cantando bajito 🎶",
  "Te estaría acariciando el cabello mientras tú te quedas dormida en mi pecho 😴",
  "Estaríamos cocinando juntos algo que ni sabríamos si va a salir rico 🍳😂",
  "Te habría llevado un helado de tu sabor favorito y te diría que te amo con cada cucharada 🍦💗",
  "Estaríamos viendo el atardecer en silencio, pero con el corazón lleno 🧡🌅",
  "Estaríamos tirados en la cama, hablando de la vida y soñando con el futuro 💬💞",
  "Te estaría molestando solo para verte hacer puchero y luego darte muchos besitos 😚",
  "Estaríamos caminando bajo la lluvia sin importarnos nada, solo felices de estar juntos 🌧️☂️",
  "Estaríamos jugando videojuegos y tú dirías que te dejo ganar (aunque no 😏🎮)",
  "Te abrazaría fuerte, tan fuerte que sientas que todo está bien 🤗💕",
  "Te estaría tomando muchas fotos porque no me canso de mirarte 📸😍",
  "Estaríamos en una cita improvisada en la azotea, con luces y música 🎵✨",
  "Nos quedaríamos despiertos hasta tarde hablando de tonterías y riéndonos por todo 🌙😂",
  "Te cantaría bajito al oído aunque no sepa cantar, solo para verte sonreír 🎤😳",
  "Estaríamos acostados en una manta mirando las estrellas y soñando con nuestro 'algún día' ✨💫"
];

let current = 0;

function mostrarMomento() {
  const momentText = document.getElementById("moment");
  momentText.style.opacity = 0;

  setTimeout(() => {
    current = (current + 1) % moments.length;
    momentText.textContent = moments[current];
    momentText.style.opacity = 1;
  }, 400);
}
