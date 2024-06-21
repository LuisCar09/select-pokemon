const selectOptions = document.getElementById('pokemon-select')
const contenedorDescriptiom = document.getElementById('container-description')
const button = document.getElementById('get-pokemon')
console.log(button)
{/* <img src="" alt="">
<h2>pokemoncito</h2>
<p><span>Tipo:</span></p>
<p><span>Peso:</span></p>
<p><span>Altura:</span></p> */}

// let firstLetter = poke.type.name[0].toUpperCase()
// console.log(firstLetter)   
const fetchPokemon = (pokemon) => {
    console.log(pokemon)
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
        if (!response.ok) {
            throw new error("ha habido un error")
        } else { return response.json() }
    }).then((data) => {
         
         contenedorDescriptiom.innerHTML = `
         <img src=${data.sprites.front_shiny} alt="${data.name}">
         <h2>${data.name}</h2>
         <p><span>Tipo:</span> ${data.types.map((poke)=> { 
                
            return poke.type.name}).join(", ")}</p>
         <p><span>Peso:</span>${data.weight}</p>
         <p><span>Altura:</span>${data.height}</p>`
        }).catch((error) => {
            console.error('Este es el mensaje de la linea 31: ',error.message)
            
        })
   
}
const getPokemon = () =>{
    fetchPokemon(selectOptions.value)
}

button.addEventListener('click', getPokemon)