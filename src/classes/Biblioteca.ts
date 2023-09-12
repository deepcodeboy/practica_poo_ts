import { Libro } from "../Interfaces/Libro";

export class Biblioteca {
    private listaLibros: Libro[] = [];

    //Metodo para generar el id de las tareas
    generarId () {
        const ids = this.listaLibros.map(e => e.id)
    
        if (!ids.length) {
          ids.push(0)
        }
    
        return Math.max(...ids) + 1
    }

    //Metodo para agregar un libro a la biblioteca
    agregarLibro(title: string, autor: string, editorial: string) {

        const newLibro: Libro = {
            id: this.generarId(),
            title,
            autor,
            editorial,
            isAvailable: true,
        };
    
        this.listaLibros.push(newLibro);
    }
        
    listarDisponibles() {
        const librosDisponibles = this.listaLibros.filter(libro => libro.isAvailable === true);
        console.log('Libros disponibles: ')
        return librosDisponibles
    }

    listarPrestados() {
        const librosPrestados = this.listaLibros.filter(libro => libro.isAvailable === false);
        console.log('Libros prestados: ')
        return librosPrestados
    }

    prestarLibro(id: number){
        const libroIndex = this.listaLibros.findIndex(libro => libro.id === id);

        if (libroIndex !== -1) {
            this.listaLibros[libroIndex].isAvailable = false;
            console.log('Libro Prestado: ' + id);
        } else {
            console.log('Libro no disponible');
        }
    }

    reingresarLibro(id: number){
        const libroIndex = this.listaLibros.findIndex(libro => libro.id === id);

        if (libroIndex !== -1) {
            this.listaLibros[libroIndex].isAvailable = true;
            console.log('Libro ingresado nuevamente: ' + id);
        } else {
            console.log('Libro ya disponible');
        }
    }
}

