// console.log(campers);
// /* 6. selectores */
// const nombreCamper = document.querySelector("#nombre");
// const edadCamper = document.querySelector("#edad");
// const promedioMinCamper = document.querySelector("#minimo");
// const promedioMaxCamper = document.querySelector("#maximo");
// const nivelCamper = document.querySelector("#nivelCampus");
// const inglesCamper = document.querySelector("#nivelIngles");
// const especialidadCamper = document.querySelector("#especialidad");
// const expertoTecnologiaCamper = document.querySelector("#expertoTecnologia");
// const inputName=document.querySelector('#nombe');

// /*1. llenamos dinamicamente los valores del select nombres*/

// campers.forEach((opcionCampers) => {
//   const opcion = document.createElement("option");
//   opcion.value = opcionCampers.nombre;
//   opcion.textContent = opcionCampers.nombre;
//   document.querySelector("#nombre").appendChild(opcion);
// });

// /*2. llenar valores en el select de edades*/

// const edadMax = 45;
// const edadMin = edadMax - 30;

// for (let i = edadMin; i <= edadMax; i++) {
//   const opcionEdad = document.createElement("option");
//   opcionEdad.value = i;
//   opcionEdad.textContent = i;
//   document.querySelector("#edad").appendChild(opcionEdad);
// }
// //5. objeto con los parametros de busqueda seleccionados
// const parametros = {
//   nombre: "",
//   edad: "",
//   minPromedio: "",
//   maxPromedio: "",
//   nivelCAmpus: "",
//   nivelIngles: "",
//   especialidad: "",
//   expertoTecnologia: "",
// };

// /* 3. event listener */

// document.addEventListener("DOMContentLoaded", () => {
//   showCampers(campers);
//   console.log(parametros);
// });

// /* 7. event listeners de los filtros (selects) */

// nombreCamper.addEventListener("input", (e) => {
//   parametros.nombre = e.target.value;
//   /* console.log(parametros); */
//   filtrarCamper();
// });

// inputName.addEventListener('input',(e)=>{
//     parametros.nombre=e.target.value
//     filtrarCamper();
// })

// edadCamper.addEventListener("input", (e) => {
//   parametros.edad = Number(e.target.value);
//   filtrarCamper();
// });

// promedioMinCamper.addEventListener("input", (e) => {
//   parametros.minPromedio = e.target.value;
//   filtrarCamper();
// });

// promedioMaxCamper.addEventListener("input", (e) => {
//   parametros.maxPromedio = e.target.value;
//   filtrarCamper();
// });

// nivelCamper.addEventListener("input", (e) => {
//   parametros.nivelCAmpus = e.target.value;
//   filtrarCamper();
// });

// inglesCamper.addEventListener("input", (e) => {
//   parametros.nivelIngles = e.target.value;
//   filtrarCamper();
// });

// especialidadCamper.addEventListener("input", (e) => {
//   parametros.especialidad = e.target.value;
//   filtrarCamper();
// });

// expertoTecnologiaCamper.addEventListener("input", (e) => {
//   parametros.expertoTecnologia = e.target.value;
//   filtrarCamper();
// });

// /* 4. funcion para inyectar html cards dinamicamente */

// function showCampers(campers) {
//   /* seleccionar elemento padre de mis hijos cards*/
//   const containerCards = document.querySelector("#tarjetas");
  

//   //limpiar

//   limpiar()

//   //contruccion de cada card por cada camper
  


//   campers.forEach((camper) => {
//     // destructuring
//     const { imagen, nombre, detalle, edad } = camper;
//     const camperHTML = document.createElement("p");
//     camperHTML.innerHTML = `
        
//         <div class="card" style="width: 20rem">
//             <img src="/img/${imagen}" class="card-img-top" alt="..." id="imgCard" />
//             <div class="card-body">
//               <h5 class="card-title">${nombre}</h5>
//               <p class="card-text">
//                 ${edad}
//                 ${detalle}
//               </p>
//             </div>
//             <ul class="list-group list-group-flush">
//             <a href="#" class="btn btn-danger">Details</a>
            
//             </ul>
//           </div>
        
//         `;
//         containerCards.appendChild(camperHTML);
//   });
// }


// /* 8. definicion de funcion filter de alto nivel */

// function filtrarCamper() {
//   let resultado = campers
//     .filter(filtrarNombre)
//     .filter(filtrarEdad)
//     .filter(filtrarMin)
//     .filter(filtrarMax)
//     .filter(filtrarNivelCampus)
//     .filter(filtrarNivelIngles)
//     .filter(filtrarEspecialidad)
//     .filter(filtrarExpertoTecnologia)
//     .filter(filtrarPorNombre)
   
//   console.log(resultado);
//   showCampers(resultado);

//   if (resultado=[]) {
//   const mensaje=document.querySelector('#noencontrado')
//     const camperHTML1 = document.createElement('p');
//       camperHTML1.innerHTML=`
//       <div class="card">
//   <div class="card-header">
//     Resultado
//   </div>
//   <div class="card-body">
//     <h5 class="card-title">Tu Busqueda ha obtenido 0 Resultados</h5>
//     <p class="card-text">Por favor busca mas especificamente.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
//     mensaje.appendChild(camperHTML1)
//   }

// }

// function filtrarNombre(camper) {
//   if (parametros.nombre) {
//     return camper.nombre === parametros.nombre;
//   }
//   return camper;
// }

// function filtrarEdad(camper) {
//   if (parametros.edad) {
//     return camper.edad === parametros.edad;
//   }
//   return camper;
// }

// function filtrarMin(camper) {
//   if (parametros.minPromedio) {
//     return camper.promedio >= parametros.minPromedio;
//   }
//   return camper;
// }

// function filtrarMax(camper) {
//   if (parametros.maxPromedio) {
//     return camper.promedio <= parametros.maxPromedio;
//   }
//   return camper;
// }

// function filtrarNivelCampus(camper) {
//   if (parametros.nivelCAmpus) {
//     return camper.nivelCAmpus === parametros.nivelCAmpus;
//   }
//   return camper;
// }

// function filtrarNivelIngles(camper) {
//   if (parametros.nivelIngles) {
//     return camper.nivelIngles === parametros.nivelIngles;
//   }
//   return camper;
// }

// function filtrarEspecialidad(camper) {
//   if (parametros.especialidad) {
//     return camper.especialidad === parametros.especialidad;
//   }
//   return camper;
// }

// function filtrarExpertoTecnologia(camper) {
//   if (parametros.expertoTecnologia) {
//     return camper.expertoTecnologia === parametros.expertoTecnologia;
//   }
//   return camper;
// }

// function filtrarPorNombre(camper) {
//     if (parametros.nombre) {
//         return camper.nombre===parametros.nombre
//     }
//     return camper;   
// }


// function limpiar() {
//   let m = document.querySelectorAll("p");
//   for (let n = 0; n < m.length; n++) {
//     m[n].remove();
//   }
// }

// console.log(campers);
// /* 6. selectores */
// const nombreCamper = document.querySelector("#nombre");
// const edadCamper = document.querySelector("#edad");
// const promedioMinCamper = document.querySelector("#minimo");
// const promedioMaxCamper = document.querySelector("#maximo");
// const nivelCamper = document.querySelector("#nivelCampus");
// const inglesCamper = document.querySelector("#nivelIngles");
// const especialidadCamper = document.querySelector("#especialidad");
// const expertoTecnologiaCamper = document.querySelector("#expertoTecnologia");
// const inputName=document.querySelector('#nombe');


// /*1. llenamos dinamicamente los valores del select nombres*/

// campers.forEach((opcionCampers) => {
//   const opcion = document.createElement("option");
//   opcion.value = opcionCampers.nombre;
//   opcion.textContent = opcionCampers.nombre;
//   document.querySelector("#nombre").appendChild(opcion);
// });

// /*2. llenar valores en el select de edades*/

// const edadMax = 45;
// const edadMin = edadMax - 30;

// for (let i = edadMin; i <= edadMax; i++) {
//   const opcionEdad = document.createElement("option");
//   opcionEdad.value = i;
//   opcionEdad.textContent = i;
//   document.querySelector("#edad").appendChild(opcionEdad);
// }
// //5. objeto con los parametros de busqueda seleccionados
// const parametros = {
//   nombre: "",
//   edad: "",
//   minPromedio: "",
//   maxPromedio: "",
//   nivelCAmpus: "",
//   nivelIngles: "",
//   especialidad: "",
//   expertoTecnologia: "",
// };

// /* 3. event listener */

// document.addEventListener("DOMContentLoaded", () => {
//   showCampers(campers);
//   console.log(parametros);
// });

// /* 7. event listeners de los filtros (selects) */

// nombreCamper.addEventListener("input", (e) => {
//   parametros.nombre = e.target.value;
//   /* console.log(parametros); */
//   filtrarCamper();
// });

// inputName.addEventListener('input',(e)=>{
//     parametros.inputnombre=e.target.value
//     filtrarCamper();
// })

// edadCamper.addEventListener("input", (e) => {
//   parametros.edad = Number(e.target.value);
//   filtrarCamper();
// });

// promedioMinCamper.addEventListener("input", (e) => {
//   parametros.minPromedio = e.target.value;
//   filtrarCamper();
// });

// promedioMaxCamper.addEventListener("input", (e) => {
//   parametros.maxPromedio = e.target.value;
//   filtrarCamper();
// });

// nivelCamper.addEventListener("input", (e) => {
//   parametros.nivelCAmpus = e.target.value;
//   filtrarCamper();
// });

// inglesCamper.addEventListener("input", (e) => {
//   parametros.nivelIngles = e.target.value;
//   filtrarCamper();
// });

// especialidadCamper.addEventListener("input", (e) => {
//   parametros.especialidad = e.target.value;
//   filtrarCamper();
// });

// expertoTecnologiaCamper.addEventListener("input", (e) => {
//   parametros.expertoTecnologia = e.target.value;
//   filtrarCamper();
// });

// /* 4. funcion para inyectar html cards dinamicamente */

// function showCampers(campers) {
//   /* seleccionar elemento padre de mis hijos cards*/
//   const containerCards = document.querySelector("#tarjetas");
  

//   //limpiar

//   limpiar()

//   //contruccion de cada card por cada camper
  


//   campers.forEach((camper) => {
//     // destructuring
//     const { imagen, nombre, detalle, edad } = camper;
//     const camperHTML = document.createElement("p");
//     camperHTML.innerHTML = `
        
//         <div class="card" style="width: 20rem">
//             <img src="/img/${imagen}" class="card-img-top" alt="..." id="imgCard" />
//             <div class="card-body">
//               <h5 class="card-title">${nombre}</h5>
//               <p class="card-text">
//                 ${edad}
//                 ${detalle}
//               </p>
//             </div>
//             <ul class="list-group list-group-flush">
//             <a href="#" class="btn btn-danger">Details</a>
            
//             </ul>
//           </div>
        
//         `;
//         containerCards.appendChild(camperHTML);
//   });
// }


// /* 8. definicion de funcion filter de alto nivel */

// function filtrarCamper() {
//   let resultado = campers
//     .filter(filtrarNombre)
//     .filter(filtrarEdad)
//     .filter(filtrarMin)
//     .filter(filtrarMax)
//     .filter(filtrarNivelCampus)
//     .filter(filtrarNivelIngles)
//     .filter(filtrarEspecialidad)
//     .filter(filtrarExpertoTecnologia)
//     .filter(filtrarPorNombre)
//   console.log(resultado);
//   showCampers(resultado);

//   if (resultado.length==0) {
//   const mensaje=document.querySelector('#noencontrado')
//     const camperHTML1 = document.createElement('p');
//       camperHTML1.innerHTML=`
//       <div class="card">
//   <div class="card-header">
//     Resultado
//   </div>
//   <div class="card-body">
//     <h5 class="card-title">Tu Busqueda ha obtenido 0 Resultados</h5>
//     <p class="card-text">Por favor busca mas especificamente.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
//     mensaje.appendChild(camperHTML1)
//   }

// }

// function filtrarNombre(camper) {
//   if (parametros.nombre) {
//     return camper.nombre === parametros.nombre;
//   }
//   return camper;
// }

// function filtrarEdad(camper) {
//   if (parametros.edad) {
//     return camper.edad === parametros.edad;
//   }
//   return camper;
// }

// function filtrarMin(camper) {
//   if (parametros.minPromedio) {
//     return camper.promedio >= parametros.minPromedio;
//   }
//   return camper;
// }

// function filtrarMax(camper) {
//   if (parametros.maxPromedio) {
//     return camper.promedio <= parametros.maxPromedio;
//   }
//   return camper;
// }

// function filtrarNivelCampus(camper) {
//   if (parametros.nivelCAmpus) {
//     return camper.nivelCAmpus === parametros.nivelCAmpus;
//   }
//   return camper;
// }

// function filtrarNivelIngles(camper) {
//   if (parametros.nivelIngles) {
//     return camper.nivelIngles === parametros.nivelIngles;
//   }
//   return camper;
// }

// function filtrarEspecialidad(camper) {
//   if (parametros.especialidad) {
//     return camper.especialidad === parametros.especialidad;
//   }
//   return camper;
// }

// function filtrarExpertoTecnologia(camper) {
//   if (parametros.expertoTecnologia) {
//     return camper.expertoTecnologia === parametros.expertoTecnologia;
//   }
//   return camper;
// }

// function filtrarPorNombre(camper) {
//   if(camper.nombre.toLowerCase().includes(parametros.inputnombre)||parametros.inputnombre==undefined ||camper.nombre.toLowerCase().includes(parametros.inputnombre.toLowerCase())){
//     return camper
//   }
//   return camper.nombre===parametros.inputnombre
// }





// function limpiar() {
//   let m = document.querySelectorAll("p");
//   for (let n = 0; n < m.length; n++) {
//     m[n].remove();
//   }
// }
console.log(campers);
/* 6. selectores */
const nombreCamper = document.querySelector("#nombre");
const edadCamper = document.querySelector("#edad");
const promedioMinCamper = document.querySelector("#minimo");
const promedioMaxCamper = document.querySelector("#maximo");
const nivelCamper = document.querySelector("#nivelCampus");
const inglesCamper = document.querySelector("#nivelIngles");
const especialidadCamper = document.querySelector("#especialidad");
const expertoTecnologiaCamper = document.querySelector("#expertoTecnologia");
const inputName=document.querySelector('#nombe');


/*1. llenamos dinamicamente los valores del select nombres*/

campers.forEach((opcionCampers) => {
  const opcion = document.createElement("option");
  opcion.value = opcionCampers.nombre;
  opcion.textContent = opcionCampers.nombre;
  document.querySelector("#nombre").appendChild(opcion);
});

/*2. llenar valores en el select de edades*/

const edadMax = 45;
const edadMin = edadMax - 30;

for (let i = edadMin; i <= edadMax; i++) {
  const opcionEdad = document.createElement("option");
  opcionEdad.value = i;
  opcionEdad.textContent = i;
  document.querySelector("#edad").appendChild(opcionEdad);
}
//5. objeto con los parametros de busqueda seleccionados
const parametros = {
  nombre: "",
  edad: "",
  minPromedio: "",
  maxPromedio: "",
  nivelCAmpus: "",
  nivelIngles: "",
  especialidad: "",
  expertoTecnologia: "",
};

/* 3. event listener */

document.addEventListener("DOMContentLoaded", () => {
  showCampers(campers);
  console.log(parametros);
});

/* 7. event listeners de los filtros (selects) */

nombreCamper.addEventListener("input", (e) => {
  parametros.nombre = e.target.value;
  /* console.log(parametros); */
  filtrarCamper();
});

inputName.addEventListener('input',(e)=>{
    parametros.inputnombre=e.target.value
    filtrarCamper();
})

edadCamper.addEventListener("input", (e) => {
  parametros.edad = Number(e.target.value);
  filtrarCamper();
});

promedioMinCamper.addEventListener("input", (e) => {
  parametros.minPromedio = e.target.value;
  filtrarCamper();
});

promedioMaxCamper.addEventListener("input", (e) => {
  parametros.maxPromedio = e.target.value;
  filtrarCamper();
});

nivelCamper.addEventListener("input", (e) => {
  parametros.nivelCAmpus = e.target.value;
  filtrarCamper();
});

inglesCamper.addEventListener("input", (e) => {
  parametros.nivelIngles = e.target.value;
  filtrarCamper();
});

especialidadCamper.addEventListener("input", (e) => {
  parametros.especialidad = e.target.value;
  filtrarCamper();
});

expertoTecnologiaCamper.addEventListener("input", (e) => {
  parametros.expertoTecnologia = e.target.value;
  filtrarCamper();
});

/* 4. funcion para inyectar html cards dinamicamente */

function showCampers(campers) {
  /* seleccionar elemento padre de mis hijos cards*/
  const containerCards = document.querySelector("#tarjetas");
  

  //limpiar

  limpiar()

  //contruccion de cada card por cada camper
  
  campers.forEach((camper,i) => {
    // destructuring
    const { imagen, nombre, detalle, edad } = camper;
    const camperHTML = document.createElement("p");
    camperHTML.innerHTML = `
        
        <div class="card" id="camper-${camper.nombre}" style="width: 20rem">
            <img src="/img/${imagen}" class="card-img-top" alt="..." id="imgCard" />
            <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
              <p class="card-text">
                ${edad}
                ${detalle}
              </p>
            </div>
            <ul class="list-group list-group-flush">
            <!-- Button trigger modal -->
              <button type="button" class="btn btn-danger btn12"  data-bs-target="#exampleModal" data-bs-toggle="modal" data-camper-id="camper-${camper.nombre}">
                    Details
              </button>
                      <!-- Modal -->
                      <div class="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content bg-dark-subtle">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5 tituloname" id="exampleModalLabel"></h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body mymodal">
                              ...
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-Danger" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
            
            </ul>
          </div>
        
        `;
        const detailsButton = camperHTML.querySelector('.btn12');
        detailsButton.addEventListener('click', () => {
        // const selectedCamperId = detailsButton.dataset.camperId;
        // const selectedCamper = campers.find(camper => `camper-${camper.nombre}` === selectedCamperId);
        const tituloname=document.querySelector('.tituloname')
        tituloname.textContent=`${camper.nombre}`
        const mymodal=document.querySelector('.mymodal')
        mymodal.innerHTML=`
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead class="table-dark">
              <tr>
                <th rowspan="3" ><img src="/img/${imagen}" class="card-img-top" alt="..." id="imgCard" /></th>
                <th class="align-middle">Promedio</th>
                <th class="align-middle">Especialidad</th>
                <th class="align-middle">Tecnología</th>
                <th class="align-middle">Teléfono</th>
                <th class="align-middle">Dirección</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td class="align-middle">${camper.promedio} ${camper.promedio>=4.5?`<span class="badge bg-success">Apt@ para trabajo remoto</span>`:`<span class="badge bg-danger">No está apt@ debe estudiar más</span>`}</td>
                <td class="align-middle">${camper.especialidad}</td>
                <td class="align-middle">${camper.expertoTecnologia}</td>
                <td class="align-middle">${camper.telefono}</td>
                <td class="align-middle">${camper.direccion}</td>
              </tr>
            </tbody>
         </table>
       </div>
      `
        // mymodal.innerHTML=`
        // <div class="table-responsive">
        //   <table class="table">
        //       <tr>
        //         <td rowspan="3"><img src="/img/${imagen}" class="card-img-top" alt="..." id="imgCard" /></td>
        //         <td class="align-middle">Promedio: ${camper.promedio} ${camper.promedio>=4.5?`Apt@ para trabajo remoto`:`No esta apt@ debe
        //         estudiar mas`}</td>
        //         <td class="align-middle">Especialidad: ${camper.especialidad}</td>
        //         <td class="align-middle">Tecnologia : ${camper.expertoTecnologia}</td>
        //         <td class="align-middle">Telefono:</td>
        //         <td class="align-middle">Direccion:</td>
        //       </tr>
            
        //   </table>
        // </div>`
  // console.log(selectedCamper);
});

        containerCards.appendChild(camperHTML);
  });
}


/* 8. definicion de funcion filter de alto nivel */

function filtrarCamper() {
  let resultado = campers
    .filter(filtrarNombre)
    .filter(filtrarEdad)
    .filter(filtrarMin)
    .filter(filtrarMax)
    .filter(filtrarNivelCampus)
    .filter(filtrarNivelIngles)
    .filter(filtrarEspecialidad)
    .filter(filtrarExpertoTecnologia)
    .filter(filtrarPorNombre)
  console.log(resultado);
  showCampers(resultado);

  if (resultado.length==0) {
  const mensaje=document.querySelector('#noencontrado')
    const camperHTML1 = document.createElement('p');
      camperHTML1.innerHTML=`
      <div class="card">
  <div class="card-header">
    0 Resultados de ${campers.length}
  </div>
  <div class="card-body">
    <h5 class="card-title">Tu Busqueda ha obtenido 0 Resultados</h5>
    <p class="card-text">Por favor busca mas especificamente.</p>
  </div>
</div>`
    mensaje.appendChild(camperHTML1)
  }

}

function filtrarNombre(camper) {
  if (parametros.nombre) {
    return camper.nombre === parametros.nombre;
  }
  return camper;
}

function filtrarEdad(camper) {
  if (parametros.edad) {
    return camper.edad === parametros.edad;
  }
  return camper;
}

function filtrarMin(camper) {
  if (parametros.minPromedio) {
    return camper.promedio >= parametros.minPromedio;
  }
  return camper;
}

function filtrarMax(camper) {
  if (parametros.maxPromedio) {
    return camper.promedio <= parametros.maxPromedio;
  }
  return camper;
}

function filtrarNivelCampus(camper) {
  if (parametros.nivelCAmpus) {
    return camper.nivelCAmpus === parametros.nivelCAmpus;
  }
  return camper;
}

function filtrarNivelIngles(camper) {
  if (parametros.nivelIngles) {
    return camper.nivelIngles === parametros.nivelIngles;
  }
  return camper;
}

function filtrarEspecialidad(camper) {
  if (parametros.especialidad) {
    return camper.especialidad === parametros.especialidad;
  }
  return camper;
}

function filtrarExpertoTecnologia(camper) {
  if (parametros.expertoTecnologia) {
    return camper.expertoTecnologia === parametros.expertoTecnologia;
  }
  return camper;
}

function filtrarPorNombre(camper) {
  if(camper.nombre.toLowerCase().includes(parametros.inputnombre)||parametros.inputnombre==undefined ||camper.nombre.toLowerCase().includes(parametros.inputnombre.toLowerCase())){
    return camper
  }
  return camper.nombre===parametros.inputnombre
}



function limpiar() {
  let m = document.querySelectorAll("p");
  for (let n = 0; n < m.length; n++) {
    m[n].remove();
  }
}