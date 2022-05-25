/*
    5. For

    a)Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for 
de JavaScript para mostrar una alerta utilizando cada una de las palabras.
    b)Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una 
alerta por cada palabra modificada.
    c)Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número 
de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos 
dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array 
final (utilizar console.log).
*/


//a
    var listaSuper = ["Leche", "carne", "Huevos", "cereales", "galletitas", "Yerba"];
    for(var i=0; i<listaSuper.length; i++){
        alert(listaSuper[i]);
    }
//b
    for(var i=0; i<listaSuper.length; i++){
        var modificado = listaSuper[i].substring(0,1).toUpperCase(0) + listaSuper[i].substring(1);
        if(listaSuper[i] != modificado){
            listaSuper[i] = modificado;
            alert(listaSuper[i] + " ahora empieza con mayuscula");
        }
    }
//c
    var arrayInicioVacio = [];
    for(var i=0; i<10; i++){
        arrayInicioVacio.push(i);
    }
    console.log(arrayInicioVacio);