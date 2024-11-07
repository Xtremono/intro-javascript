import {getHeroeById} from './bases/08-imp-exp'

//const promesa = new Promise((resolve, reject) => {

  //  setTimeout( () => {
    //    const heroe = getHeroeById(2)
      //  resolve(heroe);
        //reject("No se pudo encontrar el heroe")
    //}, 2000)
//});

//promesa.then((heroe) => {                            // "then" significa que la promesa se hizo correctamente. A su vez le paso el argumento heroe, que quiero utilizar.

  //console.log(heroe);
//}).catch(err => {                                    // "catch" significa que paso algo inesperado y ocurrio un error.
  //console.warn(err);
//})

const getHeroeByIdAnsyc = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No existe el heroe");                      // si ocurre un error, se imprime "No existe el heroe"
      }
      }, 2000)
  });

}

getHeroeByIdAnsyc(10).then( console.log ).catch( console.warn );  // aca pusimos 10, para que tire catch y tire un error, por que no hay heroe con id 10.
