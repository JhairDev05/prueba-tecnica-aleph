// --- Día 3: Memoria en espiral ---
// Te encuentras con un nuevo tipo de memoria experimental almacenada en una cuadrícula bidimensional infinita .

// Cada casilla de la cuadrícula se asigna en espiral, comenzando en una ubicación marcada 1y luego contando hacia arriba mientras se extiende en espiral. Por ejemplo, las primeras casillas se asignan así:

// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...
// Si bien esto ahorra mucho espacio (no se omite ningún cuadrado), los datos solicitados deben ser devueltos al cuadrado 1(la ubicación del único puerto de acceso a este sistema de memoria) por programas que solo pueden moverse hacia arriba, abajo, izquierda o derecha. Siempre toman la ruta más corta: la distancia de Manhattan entre la ubicación de los datos y el cuadrado 1.

// Por ejemplo:

// Los datos del cuadrado 1se transportan 0paso a paso, ya que está en el puerto de acceso.
// Los datos del cuadrado 12se transportan 3paso a paso, como: abajo, izquierda, izquierda.
// Los datos del cuadrado 23se transportan sólo 2pasos: hacia arriba dos veces.
// Los datos del cuadrado 1024deben llevarse 31paso a paso.
// ¿Cuántos pasos se requieren para llevar los datos desde el cuadrado identificado en la entrada del rompecabezas hasta el puerto de acceso?

function calcularPasos(num) {
    
    if(num == 1 ) return 0;

    let anillo = Math.ceil((Math.sqrt(num) - 1 ) / 2)

    let lado = 2 * anillo + 1

    let max = lado * lado
    let posicion = max - num

    let distancia = posicion % (lado - 1)

    let puntoMedio = (lado - 1) / 2
    let ditanciaDesdeCentro = Math.abs(distancia - puntoMedio)

    return anillo + ditanciaDesdeCentro;
}

console.log(calcularPasos(1));    // 0
console.log(calcularPasos(12));   // 3
console.log(calcularPasos(23));   // 2
console.log(calcularPasos(1024)); // 31