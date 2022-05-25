/*
6. Funciones

    a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha 
variable en la consola del navegador.
    b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros 
no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el 
valor NaN como resultado.
    c)A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/

//a
    function suma(num1, num2){
        return num1+num2;
    }
    var sumaDeNumeros = suma(10,15);
    console.log("El resultado de la suma es: ", sumaDeNumeros);//25
//b
    function sumaMejorada(num1, num2){
        if(typeof(num1) != typeof(0) || typeof(num2) != typeof(0)){
            alert("Uno de los parametros tiene un error")
            resultado = NaN;
        }else{
            resultado = num1 + num2;
        }
        return resultado;
    }
    console.log("El resultado es: ", sumaMejorada("5",5));//NaN
    console.log("El resultado es: ", sumaMejorada(5,5));//10
//c
    function sumaMejoradaSoloInt(num1, num2){
        if(typeof(num1) != typeof(0) || typeof(num2) != typeof(0)){
            alert("Uno de los parametros tiene un error")   
            resultado = NaN;    
        }else{
            resultado = num1 + num2;
            if(!Number.isInteger(num1) || !Number.isInteger(num2)){
                resultado = Math.round(resultado);
            }
        }
        return resultado;
    }  
    console.log("El resultado es: ", sumaMejoradaSoloInt(30,5));//35
    console.log("El resultado es: ", sumaMejoradaSoloInt("5.3",5));//NaN
    console.log("El resultado es: ", sumaMejoradaSoloInt(5.3,5));//10
    console.log("El resultado es: ", sumaMejoradaSoloInt(5.7,5));//11