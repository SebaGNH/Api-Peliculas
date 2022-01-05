let pagina = 1;

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnAnterior.addEventListener("click", ()=>{
    if (pagina != 1) {
        pagina --;
        cargarPeliculas();
        console.log(pagina);
    }
});
btnSiguiente.addEventListener("click", ()=>{
    pagina ++;
    cargarPeliculas();
    console.log(pagina);
});

const cargarPeliculas = async() => { /* async <-- debe estar para utilizar el await */
    try{
    const respuesta = 
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=094387692d60e64212bac949a60c19bc&languaje=es-AR&page=${pagina}`); /* await <-- espera la conección */
    /*  <-- https://developers.themoviedb.org/3/movies/get-movie-details */
    //console.log(respuesta); /*  <-- Verificamos si se conectó correctamente */

    const datos = await respuesta.json();
    //console.log(datos);
    /* console.log("Nombre de película: "+datos.title) */
    

    //console.log(datos.results); /*  <-- Resultados peliculas populares */
    let peliculas = "";
    datos.results.forEach(pelicula => {
        //console.log(pelicula.title);
        const imagen = "https://image.tmdb.org/t/p/w500/" + pelicula.poster_path;
        peliculas += ` 
        <div class="pelicula">
            <h2 class="titulo">${pelicula.title}</h2>
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
        </div>
        
        `;
        //peliculas = `<p>hola</p>`;
        document.getElementById("contenedor").innerHTML = peliculas;
        
    });


    }catch(error){ /*  <-- Al trabajar con api es recomendable utilizar try - catch */
        console.log(error);
    }
}

cargarPeliculas();