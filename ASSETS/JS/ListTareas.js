
/*TOMAMOS LOS ELEMENTOS DEL DOM CON SU IDENTIFICADOR SEA ID O CLASE*/

const ulListaTarea = document.querySelector("#listaTareas");        /*LISTA*/
const txtInput = document.querySelector("#txtIngreso");             /*CAJA DE LISTO*/
const btnAgregar = document.querySelector("#btn-Agregar");          /*BOTON*/
const chk = document.querySelector("#scales");                      /*CHEQUEADO*/
const contadorRealizadas = document.querySelector("#realizadas");   /*REALIZADAS*/
const totalTareas = document.querySelector("#total");               /*TAREAS TOTALES*/
const btnEliminar = document.querySelector("#btnEliminar");
const nuevaTarea = [
    { id: 431, nombre: "Sacar el perro a pasear" , realizado: true},
    { id: 124, nombre: "Ordenar oficina" , realizado: false},
    { id: 541, nombre: "Lavar el auto" , realizado: false}, 
];

function tareas(){
    renderTareas();
    cuentaRealizadas();
}

function renderTareas(){
    let html = "";
    html += ` <tr>
                <th id="identificador">ID</th>
                <th id="nombre">TAREA</th>
                <th id="accion">TERMINADA</th>
                <th id="accion">ACCION</th>
            </tr>`

    for (let index = 0; index < nuevaTarea.length; index++) {

        html +=
         `
        <tr>
                 <td id="clave"> ${nuevaTarea[index].id}</td>
                 <td>${nuevaTarea[index].nombre}</td>
        `

        if (nuevaTarea[index].realizado == true){

            html += `
                     <td>
                     <input type="checkbox" id="scales" name="scales" checked "/>
                    </td>
                    `
        }else{
            html += `
            <td>
               <input type="checkbox" id="scales" name="scales"/>
           </td>
           `
        }

        html += `
                 <td>
                    <button id="btnEliminar" onclick="eliminarTarea(${nuevaTarea[index].id})">Eliminar</button>
                </td>
                </tr>
                 `        
    }
    ulListaTarea.innerHTML = html;
}

function cuentaRealizadas(){
  const tareasCompletadas = nuevaTarea.filter(x => x.realizado == true);
  contadorRealizadas.innerHTML = tareasCompletadas.length
  totalTareas.innerHTML = nuevaTarea.length
}
 
  function crearTarea(){
    let aux = Math.ceil(Math.random()*45)
    nuevaTarea.push(
        { id: aux, nombre: txtInput.value , realizado: false}
    );
     renderTareas();
     cuentaRealizadas();
     txtInput.value = "";
}


function eliminarTarea(id){
        const index = nuevaTarea.findIndex((item) => item.id === id);
        nuevaTarea.splice(index,1);
        renderTareas();
        cuentaRealizadas();
}

function completada(id){
        const index = nuevaTarea.findIndex((item) => item.id === id);
        nuevaTarea[index].realizado = true
        renderTareas();
        cuentaRealizadas();
}

 
