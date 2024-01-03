const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn'); // Obtener el botón por su ID
const color = document.querySelector('.color');

const textOne = document.querySelector('.textOne');
const textTwo = document.querySelector('.textTwo');

btn.addEventListener('click', function() {
    
    const hexColor = getHexColor();

    const hexColorForTextOne = getHexColor();

    const hexColorForTextTwo = getHexColor();

    // Mostrar el 'código de color generado' en el elemento de color
    color.textContent = hexColor;

    textOne.style.color = hexColorForTextOne;
    textTwo.style.color = hexColorForTextTwo;

    // Cambia el color de fondo del body al color generado
    document.body.style.backgroundColor = hexColor;
})

// Función para obtener un número aleatorio entre 0 y el tamaño de la matriz hex
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function getHexColor() {
    //// Inicializar un color hexadecimal con #
    let hexColor = '#'; 

    // Generar un código de color de 6 dígitos
    for(let i = 0; i < 6; i++) {
        // Agregar dígitos aleatorios del array hex al color
        hexColor += hex[getRandomNumber()];
        console.log(hexColor, 'dentro');
    }
    
    console.log(hexColor, 'afuera');
    return hexColor;
}

