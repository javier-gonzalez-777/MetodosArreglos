//document.addEventListener("DOMContentLoaded", ()=>{


// Elementos del DOM
const taskVar=document.getElementById("task");
const btnVar=document.getElementById("btn");
const totalVar=document.getElementById("total");
const realizadasVar=document.getElementById("realizadas");
const listaTareasVar=document.getElementById("listaTareas");
// <td><button id="btnElimina" value="0">X</button></td>
//console.log(realizadasVar)

const tareas=[{id:1,descripcion:"javier",completado:false},
              {id:2,descripcion:"Lucciano",completado:false},
              {id:3,descripcion:"Manuel",completado:false}];
             

btnVar.addEventListener("click",()=>{
    const nuevaTarea={id:Date.now(),
                      descripcion:taskVar.value,
                      completado:false  
                      
                    }
 tareas.push(nuevaTarea);
 taskVar.value="";
 /** Actualizamos la información en el HTML */
 renderTareas()
 
})
//Eliminar con el boton 
function borrar(id){
  const indice=tareas.findIndex(tarea => tarea.id=== id)
  tareas.splice(indice, 1)
 // console.log(id)
 // console.log(tareas)
renderTareas()
}
 // checkera una tarea

 function cambiar(id){
  console.log("paso por fun cambiar")
  const indice=tareas.findIndex(tarea => tarea.id=== id)
  tareas[indice].completado= true
  //tareas.splice(indice, 1,tareas.completado=true)
  //console.log(id)
  console.log(tareas)

  renderTareas()
}

function renderTareas(){
html="";
  let i=0;
  let c=0;
  for (let tarea of tareas) {
    i=i+1;
    //console.log(tarea.completado)
    
    if(tarea.completado===true){
      c=c+1;
    html += `
             <tr>
             <td>${tarea.id}</td>
             <td>${tarea.descripcion}</td>
             <td><input onclick="cambiar(${tarea.id})" type="checkbox" checked="checked"></input></td> 
             <td><button onclick="borrar(${tarea.id})">X</button></td>
             </tr>
             </br>
  `
  
  }else{
    if(tarea.completado===false){
    html += `
                  
                      <td>${tarea.id}</td>
                      <td>${tarea.descripcion}</td>
                      <td><input onclick="cambiar(${tarea.id})" type="checkbox"></input></td> 
                      <td><button onclick="borrar(${tarea.id})">X</button></td>
                     
               <br>
                 
    `
  }
 }
  totalVar.innerHTML=i
  realizadasVar.innerHTML=c
  listaTareasVar.innerHTML=html
  console.log(listaTareasVar)
 }

}