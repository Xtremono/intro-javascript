

const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes; // con las comas les indico que posicion quiero desestructurar. En este caso estraeria a Trunks
console.log(p3);



const retornaArray = () => {
    return ["ABC", 123];
};

const [letras, numeros] = retornaArray(); // aca estoy extrayendo el valor del array contenido en la funcion retornaArray.
console.log(letras, numeros);

const usrState = (valor) => {
    return [valor, () => { console.log("Hola Mundo") } ];
};

const [nombre, setNombre] = usrState("Tom"); // y aca asignamos "Tom" al argumento valor de la linea 16
console.log(nombre);
setNombre(); // aca se llama a una funcion, por que en la segunda posicion de mi array usrState hay una funcion que imprime en pantalla hola mundo.