//Ejercitación ES6

//Crear un archivo main.js con los siguientes puntos y completar debajo de cada enunciado.

//Los valores de cada punto se deben mostrar con un console.log() especificando el dato que se muestra con un enunciado ej:

//console.log('1 - El promedio es:', miPromedio);   

const alumnos = [

{ nombre: 'Rodrigo Andrade', edad: 23 },
{ nombre: 'Nayla Arroyo Lizzio', edad: 32 },
{ nombre: 'Marianela De Martino', edad: 20 },
{ nombre: 'Axel Julian Dumas Cutuli', edad: 19 },
{ nombre: 'Martina Franco', edad: 22 },
{ nombre: 'Agustina Garcia Vega', edad: 24 },
{ nombre: 'María Agustina Mattioli Pacheco', edad: 19 },
{ nombre: 'Franco Picco', edad: 33 },
{ nombre: 'Alva Ramírez', edad: 27 },
{ nombre: 'Diego Salischiker', edad: 29 },

]

// 1. Obtener un array de strings con solo nombres de cada alumno usando .map()

const doubleName = alumnos.map( (alumnos)=> {
    return alumnos.nombre;
});

console.log("1 - nombres:", doubleName);


// 2. Obtener un array con aquellos alumnos mayores a 25 años usando .filter()

const nuMax = alumnos.filter((alumnos)=> {
    return alumnos.edad > 25;
});

console.log("2 - edades mayores a 25:", nuMax);


// 3. Obtener un entero con la edad total de todos los alumnos usando .reduce() (Investigar: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
 //sumar todas las edades.


const edades = alumnos.map((alumnos)=> {
    return alumnos.edad;
});

const sumTotAlumnos = edades.reduce( (a,b)=> {return a + b});

console.log("3 - total edades:" , sumTotAlumnos);


// 4. Obtener en una constante la edad de "Franco Picco" usando .find() ( Investigar: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find ) y destructuring del resultado. 

//Investigar método includes

const nameAge = alumnos.find( edad => edad.nombre === 'Franco Picco');

console.log('4 - alumno: ', nameAge);


// 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también

const firstAlumno = alumnos[0];
const firstName = firstAlumno.nombre;

console.log('5 - Nombre del alumno', firstName);


// 6. Obtener un array con aquellos alumnos que empiezan con la letra "M", usando .filter()

const letterMe = alumnos.filter((alumnos)=> {
    return alumnos.nombre.startsWith("M");
});

console.log('6 - Nombres que empiezan con M: ' ,letterMe);


// 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()

 
const canciones = ['Rojo', 'Amarillo', 'Negro', 'Azul', 'Naranja', 'Turquesa', 'Azul marino', 'Violeta', 'Verde', 'Lavanda', 'Esmeralda'];

const add = alumnos.map((alumnos, index) => { return alumnos.canciones = canciones[index]});
console.log('7 - add new property', add);


// 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos

const totalAlumnos = alumnos.length;

const promAlumnos = sumTotAlumnos / totalAlumnos;

console.log('8 - El promedio de alumnos es de: ', promAlumnos);

//Async/Await



// 9. Buscar una API que más te guste en https://github.com/toddmotto/public-apis pero que debajo de la columna Auth especifique "No"

//https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API

// 10. Implementar una función getDataWithPromises que utilice la API de Promises usando .then() (investigar)

const url = fetch('https://ghibliapi.herokuapp.com/films') 
.then( data => data.json())

console.log(url);

// 11. Implementar una función getDataWithAsync que utilice async / await junto con la API fetch para buscar los datos de la API elegida


async function getDataWithAsync ()
{
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const reJson = await response.json();

    return reJson;
}

//console.log(getDataWithAsync())

// 12. Hiciste manejo de errores? En caso que no lo hayas hecho utiliza .catch() en la función getDataWithPromises o try / catch en la función getDataWithAsync

const getDataWithAsyncLogic = async () => {

    const data = await getDataWithAsync();

    console.log(data);
}

getDataWithAsyncLogic ();


const getDataFilms = async () => {

     try{
        const data = await getDataWithAsync();

         const films = data.map( ({title, director, release_date, description})=> {

            document.getElementById('content').innerHTML += '<article class="stylefilm"><h1>'+title+'</h1><h2>'+director+'</h2><h2>'+release_date+'</h2><p>'+description+'</p></article>';
         })



        //  const filmsContent = document.getElementById('content').innerHTML = '<article><h1>'+title+'</h1></article>'
        
        
     }
     catch (error)
    {
        console.error(error); 
    }
}

getDataFilms();

// 13. Si te animás un poco más mostra los datos que trajiste en el elemento div con id "content". En caso que sea un array podés iterar usando .forEach() o .map(). Para ello debes investigar y usar alguna de las siguientes APIs del DOM: querySelector(), innerHTML, textContent