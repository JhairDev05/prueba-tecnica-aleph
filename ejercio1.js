/**
 * 
 * --- Día 1: Captcha inverso ---
La víspera de Navidad, uno de los elfos de Papá Noel te llama presa del pánico. "¡La impresora está rota! ¡No podemos imprimir la Lista de los Buenos y los Malos !". Para cuando llegas al subsótano 17 , solo faltan unos minutos para la medianoche. "Tenemos un gran problema", dice; "debe haber casi cincuenta errores en este sistema, pero nada más puede imprimir la Lista. ¡Párate en este cuadrado, rápido! No hay tiempo para explicaciones; si logras convencerlos de que te paguen en estrellas , podrás..." Tira de una palanca y el mundo se vuelve borroso.

Cuando recuperas la vista, todo parece mucho más pixelado que antes. ¡Debe haberte enviado dentro de la computadora! Consultas el reloj del sistema: faltan 25 milisegundos para la medianoche. Con ese tiempo, deberías poder recolectar las cincuenta estrellas para el 25 de diciembre.

Consigue estrellas resolviendo rompecabezas. Cada milisegundo del calendario de Adviento habrá dos rompecabezas disponibles ; el segundo se desbloquea al completar el primero. Cada rompecabezas otorga una estrella . ¡Mucha suerte!

Estás en una habitación con la leyenda "Cuarentena de digitalización" escrita en LED en una pared. La única puerta está cerrada, pero incluye una pequeña interfaz. "Área restringida - Prohibido el acceso a usuarios digitalizados".

Continúa explicando que solo puedes salir resolviendo un captcha para demostrar que no eres humano. Al parecer, solo tienes un milisegundo para resolverlo: demasiado rápido para una persona normal, pero a ti te parecen horas.

El captcha requiere que revises una secuencia de dígitos (tu entrada del rompecabezas) y encuentres la suma de todos los dígitos que coinciden con el siguiente dígito de la lista. La lista es circular, por lo que el dígito después del último dígito es el primero .

Por ejemplo:

1122produce una suma de 3( 1+ 2) porque el primer dígito ( 1) coincide con el segundo dígito y el tercer dígito ( 2) coincide con el cuarto dígito.
1111produce 4porque cada dígito (todos 1) coincide con el siguiente.
1234produce 0porque ningún dígito coincide con el siguiente.
91212129produce 9porque el único dígito que coincide con el siguiente es el último dígito, 9.
¿Cual es la solución a tu captcha?
 */


function resolverCaptcha(captcha) {

    let sum = 0;

    let digitos = captcha.toString();


    for( let i = 0; i < digitos.length; i++) {

        let siguienteDigito = (i + 1) % digitos.length;

        if(digitos[i] === digitos[siguienteDigito] ) {
            sum += parseInt(digitos[i])
        }
    }

    return sum
}


console.log(resolverCaptcha("1122"));
console.log(resolverCaptcha("1111"));
console.log(resolverCaptcha("1234"));
console.log(resolverCaptcha("91212129"));
console.log(resolverCaptcha("000"));