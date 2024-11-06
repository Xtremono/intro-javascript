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

//PARA DESESTRUCTURAR UN OBJETO SIEMPRE USO CONST

const usrContext = ({nombre, edad, clave, rango = "Capitan"}) => {             // aca usamos la desestructuracion en una funcion
    //console.log(nombre, rango, edad, clave)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.556,
            lng: 34.55
        }
    }

};

const { nombreClave, anios, latlng: { lat, lng} } = usrContext(persona); // El propósito de desestructurar persona dentro de la función usrContext es extraer propiedades específicas del objeto que pasamos como argumento y usarlas dentro de la función de manera más eficiente y concisa.
console.log(nombreClave, anios);
console.log(lat,lng); // en la linea 30, destructure el objeto latlng dentro de usrContext