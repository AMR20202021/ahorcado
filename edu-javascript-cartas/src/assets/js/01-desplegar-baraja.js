const palos         = ['o','c','e','b'],
      especiales    = ['J','C','R'];


const crearBaraja = () => {
    const baraja = [];

    // La baraja será un array de strings en este formato 'paloValor'
    // Tienes la especificación de palos y de los valores especiales ya definidos
    // Por ejemplo: el as de oros sería 'o1'
    //              el siete de espadas 'e7'
    //              el rey de bastos    'bR'

    // TODO: genera la baraja
   
        palos.forEach( palo=> {
           let  barajapalo=[];
            for(let i=1;i<8;i++){
             //   barajapalo[i]=palo+i;
                baraja.push(palo+i);
            }
            especiales.forEach(paloEspecial => {
                baraja.push(palo+paloEspecial)  
             
            });
        });
    
    
   // Debe retornar la baraja entera española (sin ochos ni nueves)
    return baraja;
}

// Baraja
const baraja = crearBaraja();



// Desplegar baraja sobre el tapete (véase <div id="tapete"> en `src/01-baraja-desplegada.html`)
// Desplegar baraja sobre el tapete
function desplegarBaraja(){
    let tapete=document.getElementById("tapete");
    let html="";
    for(let i=0;i<baraja.length;i++){
        
           html+= '<img class="carta "src="assets/img/cartas/'+baraja[i]+'.png">';
    
    }
    tapete.innerHTML = html;

    let btnBarajar=document.getElementById("btn-barajar");
    btnBarajar.addEventListener("click", barajar);
 
}




window.onload=desplegarBaraja;

// Registrar Eventos (véase <button> en `src/01-baraja-desplegada.html`)
//  Registra el evento para que el botón responda y se pueda ver la baraja barajada en el HTML

function barajar(){
    let barajada= _.shuffle(baraja);
    let tapete=document.getElementById("tapete");
    let html="";
    for(let i=0;i<barajada.length;i++){
        
           html+= '<img class="carta "src="assets/img/cartas/'+barajada[i]+'.png">';
    
    }
    tapete.innerHTML = html;
}

