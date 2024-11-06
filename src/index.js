//1.Desestructuracion
//2.Asignacion desestructurante

const persona = {
    nombre: "Tomas",
    edad: 31,
    clave: "Ironman",
};

//const { nombre, clave } = persona;

//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(clave);
//console.log(nombre);

const getPersona = ({nombre}) => {
    console.log(nombre)
};

getPersona(persona);