/*
4. If Else

    a)Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]
    b)Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Menor” si la edad es menor a 18
“Mayor” si la edad es mayor o igual a 18 Y menor que 65
“Jubilado” si la edad es mayor o igual que 65.
*/


//a
    var aleatorio = Math.random();
    console.log("El valor aleatorio es: ", aleatorio);
    if(aleatorio >= 0.5){
        alert("Greater than 0,5");
    }else{
        alert("Lower than 0,5");
    }
//b
    var Age = Math.random()*100;
    console.log("La edad de la persona es: ", Age);
    if(Age < 18){
        alert("Menor");
    } else if(Age > 64){
        alert("Jubilado");
    } else{
        alert("Mayor");
    }