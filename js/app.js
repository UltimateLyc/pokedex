let pokemons = JSON.parse(poke_file_kanto).results;
let inputSearch = (document.getElementById("search"));
let container_text = document.getElementById("container_text");
let imagen_container = document.getElementById("imagen_container");

function searchBtn()
{
    let pokemon = search(Number(inputSearch.value));

    if (pokemon === false)
    {
        imagen_container.innerHTML =
        `
        <div id="error_container">Error 404: Pokemon not found</div> 
        `
        container_text.innerHTML = 
        `<div>           
            
                <span><b>Tipo:</b> </span><br>
                <span><b>Altura:</b> mts</span><br>
                <span><b>Peso:</b> Kg</span><br>
                <span><b>Debilidades:</b> </span>
            
        </div>`;
    }
    else 
    {
        imagen_container.innerHTML = `
        <img src= ${pokemon.img} alt="${pokemon.name}">
        <div id ="pokemon">#${pokemon.number} ${pokemon.name}</div>`

        container_text.innerHTML = 
        `<div>           
            
                <span><b>Tipo:</b> ${pokemon.type}</span><br>
                <span><b>Altura:</b> ${pokemon.height} mts</span><br>
                <span><b>Peso:</b> ${pokemon.weight} Kg</span><br>
                <span><b>Debilidades:</b> ${pokemon.weakness}</span>
            
        </div>`;
    }    
}

const search =  (number) =>
{
    for(i = 0; i < pokemons.length; i++ )
    {
        if (number == pokemons[i].id)
        {
            return pokemons[i];
        }
    }
    return false;
}


/************************************************/

const flashingLights = {
    blueLight: '#2CACFF',
    grayLigth: '#808080'
}

let test = document.getElementById("flashing_ligth")

const flashingBlue = () =>
{
    test.style.backgroundColor = flashingLights.blueLight;
    
}
const flashingGray = () =>
{
    test.style.backgroundColor = flashingLights.grayLigth;
}

setInterval(flashingBlue,200)
setInterval(flashingGray,300)

/************************************************/

const trafficLights = {
    stopLight: 'Red',
    cautionLight: 'Yellow',
    goLight: 'Green',

}

let luzActual = ' ';
let colorApagado = '#808080';
let color;
let siguienteColor;
let anteriorColor;


function cambiarLuz()
{
    switch (luzActual) {
        case 'Red':
            luzActual = trafficLights.goLight; // hacemos el cambio para que cuando entre en el case nuevamente cambie de opcion
            color = 'rojo'; //llamamos al id del HTML en el que estamos actualemente
            siguienteColor = 'red';
            anteriorColor = 'amarillo';//llamamos al id del HTML del que estaba antes del actual

            break;

        case 'Yellow':
            luzActual = trafficLights.stopLight;
            color = 'amarillo';
            siguienteColor = 'yellow';
            anteriorColor = 'verde';
            break;

        case 'Green':
            luzActual = trafficLights.cautionLight;
            color = 'verde';
            siguienteColor = 'green';
            anteriorColor = 'rojo';
            break;

    
        default:
            luzActual = trafficLights.stopLight;
            break;
    }

    let test = document.getElementById(color);
    test.style.backgroundColor = siguienteColor;

    let testOff = document.getElementById(anteriorColor);
    testOff.style.backgroundColor = colorApagado;
}

setInterval(cambiarLuz, 200);