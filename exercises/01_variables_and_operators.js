/*
1. Variables y Operadores

    a) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. (utilizar concat)
    b) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando 
el resultado de la suma en una 3er variable (utilizar length).
*/

//a
    var ciudad = "Rosario";
    var provincia = "Santa Fe";
    var ciudadProv = ciudad.concat(", ", provincia);
    console.log("La localización concatenada: ", ciudadProv);

//b
    var nombre = "Santi";//5
    var apellido = "Caprile";//7
    var cantidadCaracteres = nombre.length + apellido.length;//5+7=12
    console.log("La cantidad de caracteres es: ", cantidadCaracteres);