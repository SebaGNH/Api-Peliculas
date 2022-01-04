const cargarPeliculas = async() => { /* async <-- debe estar para utilizar el await */

    try{
    const respuesta = 
    await fetch('https://api.themoviedb.org/3/movie/550?api_key=094387692d60e64212bac949a60c19bc&languaje=es-MX'); /* await <-- espera la conección */
    /*  <-- https://developers.themoviedb.org/3/movies/get-movie-details */
    //console.log(respuesta); /*  <-- Verificamos si se conectó correctamente */

    const datos = await respuesta.json();
    console.log(datos);
    console.log(datos.original_title);



    }catch(error){ /*  <-- Al trabajar con api es recomendable utilizar try - catch */
        console.log(error);
    }
}

cargarPeliculas();