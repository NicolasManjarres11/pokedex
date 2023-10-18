//variables pokedex //

const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";

//variables search //

const search = document.querySelector('.search-container');
const btnSearch = document.querySelector('.btn-search');
const input = document.querySelector('.input');
const pokemonNombre = document.querySelector('.pokemon-nombre');
const poke = document.querySelectorAll('.pokemon');


for (let i = 1; i <= 151; i++) {
    fetch(URL + i) //concatenamos URL con el número en i, ya que en la API de pokemon, podemos ubicar los pokemones por número
        .then((response) => response.json())
        .then((data) => mostrarPokemon(data));
}

function mostrarPokemon(data) {

    let tipos = data.types.map(tipo => 
        `<p class="tipo ${tipo.type.name}">${tipo.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = data.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    };

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <p class="pokemon-id-back">#${pokeId}</p>
    <div class="pokemon-img">
        <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
    </div>
    <div class="pokemon-info">
        <div class="nombre-contenedor">
            <p class="pokemon-id">#${pokeId}</p>
            <h2 class="pokemon-nombre">${data.name}</h2>
        </div>
        <div class="pokemon-tipos">
            ${tipos}
        </div>
        <div class="pokemon-stats">
            <p class="stat">${data.height}M</p>
            <p class="stat">${data.weight}kg</p>
        </div>
    </div>
    `;
    
    listaPokemon.append(div);
}



botonesHeader.forEach(boton => boton.addEventListener('click', (event) => {

    listaPokemon.innerHTML = "";
    const botonId = event.currentTarget.id; //currenTarget trae el html del elemento al que le damos clic

    /* listaPokemon.innerHTML = ""; */

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i) //concatenamos URL con el número en i, ya que en la API de pokemon, podemos ubicar los pokemones por número
            .then((response) => response.json())
            .then((data) => {

                const tipos = data.types.map(tipo => tipo.type.name)

                if(botonId === "ver-todos"){
                    mostrarPokemon(data)
                }
                else if (tipos.some(tipo => tipo.includes(botonId))){
                    mostrarPokemon(data)
                }
            });
    }


}))


/*<div class="pokemon">
                    <p class="pokemon-id-back">#025</p>
                    <div class="pokemon-img">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="">
                    </div>
                    <div class="pokemon-info">
                        <div class="nombre-contenedor">
                            <p class="pokemon-id">#025</p>
                            <h2 class="pokemon-nombre">PIKACHU</h2>
                        </div>
                        <div class="pokemon-tipos">
                            <p class="tipo electric">ELECTRIC</p>
                            <p class="tipo fighting">ELECTRIC</p>
                        </div>
                        <div class="pokemon-stats">
                            <p class="stat">4M</p>
                            <p class="stat">60kg</p>
                        </div>
                    </div>
                </div>
                */

// Sección del search //

btnSearch.addEventListener('click',()=> {
    search.classList.toggle('active');
    input.focus();
})


/*   document.addEventListener("keyup", e=>{

    if (e.target.matches(".input")){
  
        
  
        document.querySelectorAll("#listaPokemon").forEach(pkm =>{
  
            pkm.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?pkm.classList.remove("filtro")
              :pkm.classList.add("filtro")
        })
  
    }
  
  
  }) */
function buscador (){

    filter = input.value.toUpperCase();
    
}

    