const carta = `Mi bb hermosa, mi berrinchuda, mi pinsheshita preciosa:

Quiero que sepas que esta carta no es solo palabras bonitas,
sino un pedacito de mi corazón hecho letras, dedicado solo a vos.

Desde que llegaste, todo cambió. Todo es más tierno, más especial,
hasta los días más simples se volvieron mágicos desde que estás en ellos.

No hay canción, ni poema, ni dibujo que describa lo mucho que me encantas.
Tu voz, tu forma de ser tan dramáticamente adorable, tan celosita, tan tú...
me tienen completamente loco por vos.

Aunque estemos lejos, siento que te tengo cerca cada vez que me hablás,
cada vez que me decís “mi bb”, cada vez que sos vos.

Esta carta no intenta impresionarte.
Solo quiere recordarte algo:
te amo. Te amo muchísimo. Y quiero seguir haciéndolo todos los días.

Sos mi persona favorita. Sos mi razón.
Gracias por existir, Ángela.

`;

const cartaElement = document.getElementById("carta");
const firma = document.getElementById("firma");

let index = 0;

function escribirCarta() {
  if (index < carta.length) {
    cartaElement.textContent += carta.charAt(index);
    index++;
    setTimeout(escribirCarta, 50); // velocidad de escritura
  } else {
    firma.classList.add("visible");
  }
}

escribirCarta();

// corazones flotando
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = (Math.random() * 20 + 10) + "px";
  corazon.textContent = "💖";
  document.getElementById("corazones").appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 6000);
}

setInterval(crearCorazon, 500);
