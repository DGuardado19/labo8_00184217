const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/ hijos del elemento */
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/
onst navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
/*CREATE ELEMENT*/
/*Cree la variable cont e incialicela con un valor de 1 */
var cont = 1;
/*Declare el arreglo bitacoras de la siguiente forma var bitacoras=[]*/
var bitacoras=[];
/*Cree la variable formulario y almacene el contenido del elemento que tiene id = bitacora*/
var formulario;
document.getElementById('bitacora');
/*¿Qué contienen la variable formulario ? */
/*R// 
*/
/*EVENTO SUBMIT*/
/*Agregue el evento submit a la variable formulario*/
formulario.addEventListener("submit", (evt) => {

}); 
/*Añada el método evt.preventDefault()*/
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
 }); 
/*¿Qué hace el método evt.preventDefault() ? */
/*R//
*/
/*Declare el objeto bitacora, el cual tendra las propiedas cant, fecha, descripcion, 
cantidad, las cuales seran seteadas por medio de la variable formulario. */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
 }); 
 /*Qué es lo que contiene formulario[x]? */
 /*R//
 */
/*Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente
 el valor de la variable cont y mande a llamar a la funcion mostrar*/
 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
    cant:cont,
    fecha: formulario[1].value,
    descripcion: formulario[2].value,
    cantidad: formulario[3].value
  }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
 /*CREAR NODO*/
 /*Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table*/
 const crearElemento = (bitacora, tbody) =>{
} 
/*Cree la variable td y en ella almacene un nodo de tipo tr, 
haciendo uso del método document.createElement("tr").*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
  } 
/* Iterar el objeto bitacora, usando la funcion foreach*/

let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
});
} 
/* Cree la variable td y en ella almacene un nodo de tipo td*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
});
} 
/*Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item)*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
});
} 
/*Agregue el nodo content al nodo td*/
let tr = document.createElement("tr");
  Object.values(bitacora).forEach(item => {
   let td = document.createElement("td");
   let content = document.createTextNode(item);
   td.appendChild(content);
  });
} 
/*Agregue el nodo td al nodo tr*/
let tr = document.createElement("tr");
Object.values(bitacora).forEach(item => {
 let td = document.createElement("td");
 let content = document.createTextNode(item);
 td.appendChild(content);
});
} 
/*Agregue el nodo tr al nodo tbody*/

const crearElemento = (bitacora, tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
     let td = document.createElement("td");
     let content = document.createTextNode(item);
     td.appendChild(content);
     tr.setAttribute("class", "click");
     tr.appendChild(td);
    });
   tbody.appendChild(tr);
  } 
/*¿Qué contienen las variables tr y td ?*/
/*R//
*/
/*¿Qué contienen la variable content ?*/
/*R//
*/
/*¿Qué valor tendra tbody al finalizar la iteración?*/
/*R//
*/
/*Describa en pocas palabras lo que realizara esta función*/
/*R//
*/
/*ELIMINAR NODO*/
/*Defina la función eliminar que reciba como argumento el elemento tobody de una table*/
const eliminar= (tbody)=>{
}
/*Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody*/
const eliminar= (tbody)=>{
    while (tbody.firstChild) {
    }
   }
/* Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento */
tobody const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }
/*¿Qué es lo que hace .firstChild?*/
/*R//
*/
/*Después de realizar el while ¿Comó quedara el elemento tbody ? */
/*R//
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/
*/
/*Defina la función mostrar el cual tendra el siguiente contenido:*/

const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
      eventtr.forEach((item, index) => {
      item.addEventListener("click", () => {
      document.querySelector("#fecha").value = item.childNodes[1].textContent;
      document.querySelector("#descp").value = item.childNodes[2].textContent;
      document.querySelector("#cant").value = item.childNodes[3].textContent;
     });
    })
   } 
/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; */
/*R//
*/
/* Defina la función mostrar de la siguiente manera: */
const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
     eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
     crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
   } 
/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ? */
/*R//
*/
/* ¿Qué hace el método childElementCount?*/
/*R//
*/
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? */
/*R//
*/
/* ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? */
/*R//
*/