

const apiKey = "Xu1uwWd4ksBxNNigyM0Xg11Xlbb7I12w";

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion

    .then( resp => resp.json() )

    .then( ({ data }) => {

       const { url } = data.images.original;

       const img = document.createElement("img");                // creo un elemento html
       img.src = url;                                            // creo un src en mi img, que va a tener el url de la imagen

       document.body.append( img );                              // imprimo eso en el body de mi HTML

    })

    .catch( console.warn );
