/*
2. Strings

    a)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
    b)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).
    c)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar 
la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/


//a
    var cuit = "20-41123123-1"
    var cuitRecortado = cuit.substring(0,5);
    console.log("Los primeros 5 caracteres del cuit son: ", cuitRecortado);
//b
    var correoElectronico = "santiAgoCaPriLe7@gmail.com"
    var correoCorregido = correoElectronico.substring(0,1).toUpperCase() + correoElectronico.substring(1).toLowerCase();
    console.log("El correo corregido queda: ", correoCorregido);
//c
    var direccion = "Ovidio Lagos 123";
    var positionBlank = direccion.indexOf(" ")
    console.log("El espacio está en la posición: ", positionBlank);