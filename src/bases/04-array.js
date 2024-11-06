const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5]; // con (...) traigo al array anterior y despues le pongo un 5 al final del array.

const arreglo3 = arreglo2.map(num => {
    return num * 2;
})


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);