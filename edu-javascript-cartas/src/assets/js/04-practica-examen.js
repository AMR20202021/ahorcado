
/*
let mi_Array = [
['lucas','paco','juan'],
['pedro','luis','sacho'],
['roi','brais', 'vane']
];
mi_Array.push(['juanito','pepito','perico'])
console.log(mi_Array[3]);
console.log(mi_Array.length);
mi_Array.pop();
console.log(mi_Array[3]);
const ST2 ="hola mundo";
console.log(ST2[1]);
console.log('unicornio'.charAt(5));
let nombre='alvaro';
console.log(`el nobre es: ${nombre}`);


function suma(a ,b) {
return a+b;
   
}

console.log(suma(1,2));
let sumaFlecha =(a,b) => a+b;
console.log(sumaFlecha(5,6));
const my_objeto = {

    nombre:"Alvaro",
    apellido: "Mosquera",
    saluda: function(){
        console.log("hola me llamo ", this.nombre, this.apellido)
    }
}

let mi_objeto={
    direccion:"eira",
    numero : "1",
    datos: function(){

        console.log("Los datos son", this.direccion, this.numero )
    }
}

let mi_obj=Object.create(mi_objeto);
let mi_ob=__proto__.my_objeto;

console.log(my_objeto.nombre);
my_objeto.saluda();
mi_obj.datos();
mi_ob.saluda();

*/




function empezar(){
    let boton = document.getElementById('btn-barajar');
    boton.addEventListener('click',mostrarPalabra);

}
function mostrarPalabra(){
    let palabra = document.getElementById("palabra");

    let mostrarPalabra = document.createElement('textarea');
    mostrarPalabra.innerText="perico de los palotes";
  
    let tapete = document.getElementById("tapete");
    
    
    tapete.append(mostrarPalabra);
console.log("perico de los palotes");
console.log(mostrarPalabra);

}


window.onload = empezar;