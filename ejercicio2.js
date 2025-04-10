// --- Día 2: Suma de comprobación de corrupción ---
// Al cruzar la puerta, una figura humanoide brillante te grita: "¡Tú! Parece que tu estado está inactivo. ¡Ven a ayudarnos a reparar la corrupción en esta hoja de cálculo! Si tardamos un milisegundo más, ¡tendremos que mostrar un cursor de reloj de arena!"

// La hoja de cálculo consta de filas con números aparentemente aleatorios. Para garantizar que el proceso de recuperación sea correcto, se necesita calcular la suma de comprobación de la hoja de cálculo . Para cada fila, determine la diferencia entre el valor mayor y el menor; la suma de comprobación es la suma de todas estas diferencias.

// Por ejemplo, dada la siguiente hoja de cálculo:

// 5 1 9 5
// 7 5 3
// 2 4 6 8
// Los valores más grande y más pequeño de la primera fila son 9y 1, y su diferencia es 8.
// Los valores más grande y más pequeño de la segunda fila son 7y 3, y su diferencia es 4.
// La diferencia de la tercera fila es 6.
// En este ejemplo, la suma de comprobación de la hoja de cálculo sería 8 + 4 + 6 = 18.

// ¿Cuál es la suma de comprobación de la hoja de cálculo en la entrada de su rompecabezas?


function sumaTotal(matriz) {

    return matriz.split('\n').reduce((sum, fila) => {
        const numeros = fila.split(/\s+/).map(Number)
        const max = Math.max(...numeros)
        const min = Math.min(...numeros)
        return sum + (max - min)
    }, 0)
}

const numeros = `
100 5 5 10
0 1 2 3 4 5
`

console.log(sumaTotal(numeros));