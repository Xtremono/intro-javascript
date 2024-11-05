const persona = {
    nombre: "Tomas",
    apellido: "Ruiz",
    edad: 31,
    direccion: {
        ciudad: "Ancud",
        zip: 556567,
        latitud: 14.566,
        longitud: 34.64537,
    }
};

console.log(persona);
// console.table(persona); ===> Esto imprimi en consola como una tabla de excel.

const persona2 = {...persona}; // se esta clonando al primero objeto, pero no se estan alterando las key ni values del objeto persona, por estos 3 puntos ...