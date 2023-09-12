import { Contacto } from "../Interfaces/Contacto";

export class Contactos {
    private listaContactos: Contacto[] = [];

    generarId () {
        const ids = this.listaContactos.map(e => e.id)
    
        if (!ids.length) {
          ids.push(0)
        }
    
        return Math.max(...ids) + 1
    }

    agregarContacto(name: string, email: string, phoneNumber: string){

        const newContacto = {
            id: this.generarId(),
            name,
            email,
            phoneNumber,
            isActive: true
        };

        this.listaContactos.push(newContacto);
    }

    ListarContactos(){
        const contactosListados = this.listaContactos.filter(contacto => contacto.isActive= true);
        console.log('Contactos: ')
        return contactosListados
    }

    listarPorNombre(name: string){
        const contactoName = this.listaContactos.filter(contacto => contacto.name === name)
    }

}