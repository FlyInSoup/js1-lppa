/*
3. Arrays

    a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
    b)Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
    c)Agregar un elemento al principio y al final del array (utilizar unshift y push).
    d)Quitar un elemento del principio y del final del array (utilizar shift y pop).
    e)Invertir el orden del array (utilizar reverse).
    f)Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
    g)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

//a
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log("Los meses 5 y 11 son respectivamente: ", meses[4], "y", meses[10]);
//b 
    console.log(meses.sort());
//c
    meses.push("nuevoUltimoMes");
    meses.unshift("nuevoPrimerMes");
    console.log(meses);
//d
    meses.pop();
    meses.shift();
    console.log(meses);
//e
    meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses.reverse());
//f
    meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log(meses.join(" - "));
//g
    var mesesRecortados = meses.slice(4,11);
    console.log(mesesRecortados);

    