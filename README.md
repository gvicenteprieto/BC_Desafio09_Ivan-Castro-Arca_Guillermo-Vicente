# Bootcamp Full Stack Engineer > educaciónIT

## Entrega Desafío Grupal

## BC_Desafio09_Ivan-Castro-Arca_Guillermo-Vicente

### Authors

- [Ivan Castro Arca](https://github.com/ivanaca777)

- [Guillermo Vicente](https://github.com/gvicenteprieto)

### Description

- Desafío grupal del bootcamp de Full Stack de [educaciónIT](https://www.educacionit.com/)


#### Parte 1

- Crear dentro de la carpeta "parte-1" un archivo index.html e incluir en él el llamado a un archivo de JavaScript externo.

- En el archivo de JS externo crear un constructor de objetos Libro que reciba titulo y autor como parámetros y utilice dichos valores para cargarlos en propiedades con los mismos nombres, para poder crear un libro de la siguiente manera:

let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown')

Si esto está bien hecho, al ejecutar console.log(unLibro) el intérprete de JavaScript debería mostrar esta información:
Libro {autor: "Dan Brown", titulo: "Ángeles y Demonios"}.

- Agregar en Libro el método mostrarDatosEnConsola() que imprima directamente en la consola el nombre del libro y el autor al que pertenece, de tal modo que al ejecutar:
unLibro.mostrarDatosEnConsola()
en la consola se visualice la siguiente oración, con este formato exacto (sin comillas):
"Ángeles y Demonios, de DAN BROWN"

- Agregar en Libro el método mostrarDatosEnAlert() que, al ser llamado, muestre en una ventanita alert el mismo string que en el punto anterior.

Si esto está bien hecho, el siguiente código debería mostrar el texto indicado en una ventanita alert:
unLibro.mostrarDatosEnAlert()

Tener en cuenta que los puntos 3 y 4 tienen el mismo texto de salida. Evitar repetir código. Es decir que, si en lugar de mostrar este texto al llamar a ambas funciones:
"Ángeles y Demonios, de DAN BROWN",
se decidiera cambiar el texto generado a este formato:
"Título: Ángeles y Demonios. - Autor: Dan Brown",
la modificación debería efectuarse en un único lugar, y no en ambas funciones.

- Agregar en Libro el método getTitulo() que retorne el título del libro.

Si esto está bien hecho, el siguiente código no debería mostrarle nada al visitante ni en el DOM, consola, ni ningún otro lado:
let nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
let tituloDelNuevoLibro = nuevolibro.getTitulo();

Sin embargo, al agregarle la siguiente línea debería mostrar en una ventanita alert el título 'Fuego y Sangre':
alert(tituloDelNuevoLibro);

- Agregar en Libro un método mostrarDatos(), que reciba un parámetro, que logre los siguientes resultados:
mostrarDatos('alert')   // Imprime "Fuego y Sangre, de GEORGE R. R. MARTIN" en una vantanita alert
mostrarDatos('console') // Imprime "Fuego y Sangre, de GEORGE R. R. MARTIN" en la consola
mostrarDatos()          // Imprime "Fuego y Sangre, de GEORGE R. R. MARTIN" en la consola
No repetir código.
