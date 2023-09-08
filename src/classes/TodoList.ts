import {Todo} from '../Interfaces/Todo';

//Clase para listas de tareas por hacer
export class TodoList {
    private todos: Todo[] = [];

    //Metodo para generar el id de las tareas
    generarId () {
        const ids = this.todos.map(e => e.id)
    
        if (!ids.length) {
          ids.push(0)
        }
    
        return Math.max(...ids) + 1
      }

    //Metodo para agregar una tarea a la lista
    agregarTarea(title: string, autor: string, date: string){
        
        const newTodo: Todo = {
            id: this.generarId(),
            title,
            state: true, 
            isCompleted: false,
            autor,
            date,
        };

        this.todos.push(newTodo);
    }

    //Metodo para listar todas las tareas activas
    listarTareas(){
        const tareasActivas = this.todos.filter(todo => todo.state === true)
        console.log('Tareas encontradas: ')
        return tareasActivas
    }

    //Metodo para listar una tarea por id
    listarUnaTarea(id: number){
        const todoIndex = this.todos.findIndex(todo => todo.id === id);

        if(todoIndex != -1){
            console.log('Tarea encontrada: ')
            return this.todos[todoIndex]
        } else {
            console.log('Tarea no encontrada');
        }
    }

    //Metodo para marcar como completada una tarea
    completarTarea(id: number){
        const todoIndex = this.todos.findIndex(todo => todo.id === id);

        if (todoIndex !== -1) {
            this.todos[todoIndex].isCompleted = true;
            console.log('Tarea completada')
            return this.todos[todoIndex]
        } else {
            console.log('Tarea no encontrada');
        }
    }

    //Metodo para marcar como inactiva una tarea 
    borrarTarea(id: number){
        const todoIndex = this.todos.findIndex(todo => todo.id === id);

        if (todoIndex !== -1) {
            this.todos[todoIndex].state = false;
            console.log('Tarea borrada');
        } else {
            console.log('Tarea no encontrada');
        }
    }

}


