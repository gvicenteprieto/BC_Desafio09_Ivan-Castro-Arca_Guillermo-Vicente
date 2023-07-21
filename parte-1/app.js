// 2
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    mostrarDatosEnConsola() {
        console.log(`${this.titulo}, de ${this.autor}`)
    }
    mostrarDatosEnAlert() {
        alert(`${this.titulo}, de ${this.autor}`)
    }
    getTitulo() {
        return this.titulo;
    }
    mostrarDatos(param) {
        if(param==='alert'){
            alert(`${this.titulo}, de ${this.autor}`)
        }else if(param==='consola' || param!=='alert'){
            console.log(`${this.titulo}, de ${this.autor}`)
        }
    }
}

let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown');
console.log(unLibro);

// 3
unLibro.mostrarDatosEnConsola();

// 4
unLibro.mostrarDatosEnAlert();

// 5
console.log(unLibro.getTitulo());

let nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
let tituloDelNuevoLibro = nuevolibro.getTitulo();
//console.log(nuevolibro.getTitulo());

alert(tituloDelNuevoLibro);

// 6
unLibro.mostrarDatos('alert');
unLibro.mostrarDatos('consola');
unLibro.mostrarDatos('');