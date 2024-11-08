

const getImage = async() => {

  try {

  const apiKey = "Xu1uwWd4ksBxNNigyM0Xg11Xlbb7I12w"
  const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`); // espera a que esta promesa se cumpla. Con el await
  const { data } = await resp.json();

  const { url } = data.images.original;
  const img = document.createElement("img");
  img.src = url;
  document.body.append( img );
  } catch (error) {
    console.error(error);
  }



}


getImage();
