import { Biblioteca } from './classes/Biblioteca'
import { Circulo, Rectangulo, TrianguloRectangulo, Geometria } from './classes/FormasGeometricas'
import { TodoList } from './classes/TodoList'
import {Perro} from './classes/MascotaVirtual'
function main () {
}

main()

//Ejemplo todo list
/* const listaTodos = new TodoList();
listaTodos.agregarTarea('Tarea1', 'Ayrton', '08/09/2023');   
listaTodos.agregarTarea('Tarea2', 'Ayrton', '09/09/2023');   
listaTodos.completarTarea(1)
console.log(listaTodos.listarTareas())
console.log('----------------------------------------------------------------')
listaTodos.borrarTarea(1)
console.log(listaTodos.listarTareas())
console.log('----------------------------------------------------------------')
console.log(listaTodos.listarUnaTarea(1)) */


//Ejemplo calculadora geometrica
/* const geometria1 = new Geometria(new Circulo(5));
const geometria2 = new Geometria(new Rectangulo(10,15));
const geometria3 = new Geometria(new TrianguloRectangulo(5,10));

console.log(geometria1.area());
console.log(geometria2.area());
console.log(geometria3.area()); */


//Ejemplo Biblioteca virtual 
/* const BibliotecaChaqueña = new Biblioteca();
BibliotecaChaqueña.agregarLibro('CyberSecurity 4All', 'AaleSan', 'Polo');
BibliotecaChaqueña.agregarLibro('TypeScript 4All', 'Chebi', 'Polo');
BibliotecaChaqueña.agregarLibro('PHP 4All', 'Dani', 'Polo');
BibliotecaChaqueña.agregarLibro('Docker 4All', 'Marco', 'Polo');

console.log(BibliotecaChaqueña.listarDisponibles())
BibliotecaChaqueña.prestarLibro(1)
BibliotecaChaqueña.prestarLibro(2)
console.log(BibliotecaChaqueña.listarDisponibles())
console.log(BibliotecaChaqueña.listarPrestados())*/


//Ejemplo Mascota virtual
const perro1 = new Perro(1, "ñerro", "Lolo");
console.log(perro1.estado());
perro1.play();
perro1.play();
perro1.play();
perro1.play();
perro1.play();
perro1.play();
perro1.play();
perro1.play();
console.log(perro1.estado());
perro1.sleep();
perro1.eat();
console.log(perro1.estado());


//Ejemplo Lista de contactos









   