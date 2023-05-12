// Define una variable body que inicializa en el body del archivo html.
const body = document.body;
// Crear una función que genera un color aleatorio al hacer click en el botón.
function GenerarColorHexadecimal () {
  // variable con todos los caracteres de hexadecimal conjugables para generar colores.
  //Los colores se definen con # y 6 carácteres hexadecimales. Ejemplo: "#FFD700"
const caracteres = '012356789ABCDEF';
let color = '#';
// Bucle mientras el iterador sea menor a 6, o sea 5, ya que empieza en la posición 0, lo que es igual a 6 carácteres.
// Math.floor es una librería y Math.random una sublibrería.. o una función? esto está permitido?
for (let i = 0; i < 6; i++) {
  color += caracteres[Math.floor(Math.random() * 16)];
}
  return color;
}
// Agrega un evento click al botón que cambie el color de fondo del body al color generado por la función anterior
boton.addEventListener('click', () => {
  const ColorAleatorio = GenerarColorHexadecimal();
  body.style.backgroundColor = ColorAleatorio;
})