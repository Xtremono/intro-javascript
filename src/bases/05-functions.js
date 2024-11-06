console.log("no funca");

//const saludar = function(nombre) {
//    return `Hola ${nombre}`
//};

const saludar = nombre =>{
    return `Hola ${nombre}`
};

const saludar2 = nombre => `Hola ${nombre}`;
const saludar3 = () => `Hola Mundo`;


console.log(saludar("Tomas"));
console.log(saludar2("Jose"));
console.log(saludar3());

const getUser = () => {
    return {
        uid: "ABC1234",
        username: "Xtremono", 
    }
};

const getUsuarioActivo = nombre => ( {
    uid: "CVB1234",
    username: nombre
});                                                   //function getUsuarioActivo(nombre) {
                                                    // return {
                                                        //   uid: "CVB1234",
                                                        // username: nombre
                                                        //}
                                                    //}
const usuarioActivo = getUsuarioActivo("Tomas");
console.log(usuarioActivo);

// Con parentesis ({uid: "ADC123", username: "Tom"}) se retorna un objeto de manera implicita. Seria lo mismo que return { uid: "ADC123", username: "Tom"};