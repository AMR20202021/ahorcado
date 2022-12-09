
const palos = ['e', 'o', 'b', 'c'],
    especiales = ['J', 'C', 'R'];

// Esta función que crea una baraja
const crearBaraja = () => {
    const baraja = [];

    // La baraja será un array de strings en este formato 'paloValor'
    // Tienes la especificación de palos y de los valores especiales ya definidos
    // Por ejemplo: el as de oros sería 'o1'
    //              el siete de espadas 'e7'
    //              el rey de bastos    'bR'

    // genera la baraja

    // Debe retornar la baraja entera española (sin ochos ni nueves)

    palos.forEach(palo => {
        let barajapalo = [];
        for (let i = 1; i < 8; i++) {
            baraja.push(palo + i);
        }
        especiales.forEach(paloEspecial => {
            baraja.push(palo + paloEspecial)

        });
    });



    return baraja;
}
//esta constante representa la baraja.
const baraja = crearBaraja();
let barajada;

//esta función coje la baraja creada la mezcla y la devuelve. 
function barajar() {
    barajada = _.shuffle(baraja);

    return barajada;
}

// TODO: Crear manos, mesa y baraja
// Crea tus colecciones para representar las manos de cada jugador
// las cartas que hay sobre la mesa y la baraja de cartas que
// todavía no se han repartido


// TODO: Repartir cartas entre jugadores representándolas sobre la mesa
// Representa las cartas sobre la mesa manipulando el documento web



// Véase en src/02-repartir-escoba.html los divs con id 'mano1' y 'mano2'
// La 'mano1' representa la colección de 3 cartas que tiene el jugador (se debe ver su valor)
// La 'mano2' representa la colección de 3 cartas que tiene la computadora (NO se debe ver su valor)
// TODO: Primero reparte las cartas de los jugadores y represéntalas sobre la mesa

// Véase en src/02-repartir-escoba.html el div con id 'mano0'
// La 'mano0' representa la colección de cartas que todavía no se han repartido (baraja)
// No se debe poder ver el valor de estas cartas (boca abajo)

// TODO: Después coge de la baraja 4 cartas situándolas sobre la mesa

// TODO: Situa la baraja de cartas restantes sobre la mesa


// Registra un evento para el botón (button id='btn-nuevo-juego')
// de forma que pulsándolo se inicie una nueva repartición de cartas


//Esta funcion hace el repartro de la baraja en la mano del jugador la computadora y la mesa.
let repartir = () => {

    //la variable barajada es el array de cartas barajado.
    barajada = barajar();

    //estos tres array es el control del reparto por arrays para versiones posteriores, cada array represanta las cartas que tiene jugador, computadora y mesa.
    let arrayComputadora = repartoArrayComp();
    let arrayJugador = repartoArrayJugador();
    let arrayMesa = repartoArrayMesa();

    //implementación del voton nuevo juego donde registra el evento click y llama a la funcion barajar boton.
    let botonRepartir = document.getElementById("btn-nuevo-juego");
    botonRepartir.addEventListener("click", barajarBoton);


    //se importa el elemento mano y se añanden las cartas en forma de taco.
    let mano = document.getElementById("mano0");
    for (let i = 0; i < barajada.length; i++) {
        elemento = añadirCarta("assets/img/cartas/back-card.png", "mazo", 'carta-en-taco carta');
        mano.append(elemento);
    }

     //se importa el elemento mano2(las cartas de la computadora) y se añanden las cartas en abanico.
    let manoComputadora = document.getElementById("mano2");
    elemento1 = añadirCarta("assets/img/cartas/back-card.png", arrayComputadora[0], 'carta rotate-izq carta-en-mano');
    elemento2 = añadirCarta("assets/img/cartas/back-card.png", arrayComputadora[1], 'carta  carta-en-mano');
    elemento3 = añadirCarta("assets/img/cartas/back-card.png", arrayComputadora[2], 'carta rotate-der carta-en-mano');

    manoComputadora.append(elemento1, elemento2, elemento3);

    //se importa el elemento mano1(las cartas del jugador) y se añanden las cartas en abanico.
    let manoJugador = document.getElementById("mano1");


    elemento1 = añadirCarta("assets/img/cartas/" + arrayJugador[0] + ".png", arrayJugador[0], 'carta rotate-izq carta-en-mano');
    elemento2 = añadirCarta("assets/img/cartas/" + arrayJugador[1] + ".png", arrayJugador[1], 'carta  carta-en-mano');
    elemento3 = añadirCarta("assets/img/cartas/" + arrayJugador[2] + ".png", arrayJugador[2], 'carta rotate-der carta-en-mano');

    manoJugador.append(elemento1, elemento2, elemento3);

    //se importa el elemento mesa(las cartas de despliegan en la mesa) y se añanden las cartas.
    let mesa = document.getElementById("mesa");

    elemento1 = añadirCarta("assets/img/cartas/" + arrayMesa[0] + ".png", arrayMesa[0], 'carta');
    elemento2 = añadirCarta("assets/img/cartas/" + arrayMesa[1] + ".png", arrayMesa[1], 'carta');
    elemento3 = añadirCarta("assets/img/cartas/" + arrayMesa[2] + ".png", arrayMesa[2], 'carta');
    elemento4 = añadirCarta("assets/img/cartas/" + arrayMesa[3] + ".png", arrayMesa[3], 'carta');


    mesa.append(elemento1, elemento2, elemento3, elemento4);

    //se representan en la consola las cartas que tiene cada jugador, la mesa y el taco sobrante.
    console.log("Cartas computadora " + arrayComputadora);
    console.log("Cartas jugador "+  arrayJugador);
    console.log("cartas de la mesa " + arrayMesa);
    console.log("Cartas del taco " + barajada );


}
//funcion que crea un elemento img con sus valores y lo devuelve  para añadir al elemento correspondiente.
let añadirCarta = (src, alt, clase) => {
    elemento = document.createElement('img');
    elemento.src = src;
    elemento.alt = alt;
    elemento.className = clase;

    return elemento;
}
//funcion que llama a las funciones borrarTodo(vacia la mesa), y repartir(vuelve a repartir las cartas).
function barajarBoton() {
    borraTodo();
    repartir();
//window.location.reload();

}
//coje todos los elementos de la mesa y los vacia.
let borraTodo = () => {
    let mano = document.getElementById("mano0");
    let manoJugador = document.getElementById("mano1");
    let mesa = document.getElementById("mesa");
    let manoComputadora = document.getElementById("mano2");
    mano.innerHTML = "";
    manoJugador.innerHTML = "";
    mesa.innerHTML = "";
    manoComputadora.innerHTML = "";
}
//array para control de las cartas de la computadora.
let repartoArrayComp = () => {
    let arrayComputadora = [];
    for (i = 0; i < 3; i++) {
        arrayComputadora.push(barajada[i]);
        barajada.shift(barajada[i]);
    }
    return arrayComputadora;

}
//array para control de las cartas del jugador.
let repartoArrayJugador = () => {

    let arrayJugador = [];

    for (i = 0; i < 3; i++) {
        arrayJugador.push(barajada[i]);
        barajada.shift(barajada[i]);
    }
    return arrayJugador;
}
//array para control de las cartas de la mesa.
let repartoArrayMesa = () => {

    let arrayMesa = [];

    for (i = 0; i < 4; i++) {
        arrayMesa.push(barajada[i]);
        barajada.shift(barajada[i]);
    }
    return arrayMesa;
}
//funcion que al cargar pajina llama a la función repartir.
window.onload = repartir;


