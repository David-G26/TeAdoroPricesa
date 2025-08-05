const razones = [
  "Tu risa es mi sonido favorito 😍",
  "Eres mi berrinchuda hermosa 💕",
  "Me encantas cuando te haces la pinsheshita 😜",
  "Porque con solo un mensaje tuyo ya sonrío 💬",
  "Tienes los ojitos más lindos del mundo ✨",
  "Eres mi lugar seguro 🏡",
  "Tu voz me calma, me llena 🥺",
  "Por cómo te enojas y aún así eres tierna 😤",
  "Eres como un rayito de sol en mis días grises ☀️",
  "Tu ternura no tiene comparación 🧸",
  "Tus celos me dan risa, pero también me encantan 🙈",
  "Te amo tal como eres, dramática y todo 🎭",
  "Porque cuando pienso en el amor, pienso en vos 💌",
  "Nunca nadie me hizo sentir así 🥰",
  "Te volviste parte de mi rutina diaria 🗓️",
  "Porque me inspiras a ser mejor cada día 🚀",
  "Eres única, y eso me vuelve loco 🤯",
  "A veces ni digo nada, y tú ya me entendés 🧠",
  "Me hacés sentir querido como nadie más ❤️",
  "Porque te amo con cada parte de mí 💘",
  "Tu forma de hablar me derrite 🤤",
  "Siempre me haces sentir importante 🙏",
  "Aunque estés celosa, sigues siendo un amor 🐱",
  "Te preocupás por mí, y eso vale oro 💎",
  "Porque me hacés reír incluso cuando no quiero 😂",
  "Tus ojitos cuando estás seria me matan 😳",
  "Amo cuando me decís cosas lindas sin razón 💬",
  "Porque sos mi princesa, mi Ángela 👑",
  "Eres mi motivación cada día 🌅",
  "Hasta tus berrinches son adorables 😅",
  "Te extraño aunque haya hablado contigo hace poco 💭",
  "Porque cuando me ignorás, te extraño aún más 💔",
  "Me encanta cómo hacés tus dramas, mi actriz favorita 🎬",
  "Tu ternura es como medicina para mí 💊",
  "Porque sos mi lugar feliz 🏖️",
  "Amo tus ocurrencias locas 😂",
  "Hasta tus enojos me parecen lindos 🤷‍♂️",
  "Me encanta cómo hablas de las cosas que amas 🥺",
  "Porque tenés una luz que ilumina todo 🌟",
  "Amo cuando me haces sentir que te importo 😘",
  "Porque puedo ser yo mismo con vos 🧍‍♂️",
  "Sos la razón por la que sonrío sin motivo 😊",
  "Porque cada día que pasa, me gustás más 💞",
  "Amo cómo sos de dulce y atrevida al mismo tiempo 😏",
  "Me hacés sentir amado solo con existir 🥰",
  "Porque nunca me canso de hablar con vos 📱",
  "Amo imaginarme un futuro con vos 💍",
  "Porque incluso cuando estás seria, te ves hermosa 🥵",
  "Sos mi todo, mi Ángela, mi mundo 🌍",
  "Porque te amo más de lo que las palabras pueden decir 💗"
];


let indice = 0;

const razonEl = document.getElementById("razon");
const boton = document.getElementById("mostrar-btn");

boton.addEventListener("click", () => {
  razonEl.classList.remove("visible");

  setTimeout(() => {
    razonEl.textContent = razones[indice];
    razonEl.classList.add("visible");
    indice = (indice + 1) % razones.length;
  }, 200); // animación suave entre frases
});
