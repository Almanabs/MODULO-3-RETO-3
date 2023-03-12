// Solicitar al usuario que ingrese tres nombres unidos por una coma
var nombres = prompt("Ingresa tres nombres unidos por una coma: ");

// Convertir la cadena en un arreglo de nombres
var arr_nombres = nombres.split(",");

// Recorrer el arreglo de nombres
for (var i = 0; i < arr_nombres.length; i++) {
    // Imprimir la ubicación del nombre en el arreglo y la posición de la coma en la cadena original
    console.log("El nombre " + arr_nombres[i] + " se encuentra en la posición " + i + " del arreglo y en la posición " + nombres.indexOf(arr_nombres[i]) + " de la cadena original.");
}
