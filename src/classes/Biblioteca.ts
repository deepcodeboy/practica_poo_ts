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

    //Metodo para agregar una tarea a la lista
    agregarTarea(title: string, autor: string, editorial: string) {

        const newLibro: Libro = {
            id: this.generarId(),
            title,
            autor,
            editorial,
            isAvailable: true,
        };
    
        this.listaLibros.push(newLibro);
    }
        
    
}

