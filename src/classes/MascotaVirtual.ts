import { Mascota } from "../Interfaces/Mascota";

export class Perro implements Mascota {
  constructor(
    public id: number,
    public typeOfAnimal: string,
    public name: string,
    public energy: number = 100,
    public happiness: number = 20,
    public hungry: number = 100
  ) {}

  private estabilizar() {

    if (this.energy > 100) {
      this.energy = 100;
    } else if (this.energy < 0){
        this.energy = 0;
    }

    if (this.happiness<0){
        this.happiness = 0;
    } else if (this.happiness > 100){
        this.happiness = 100;
    }

    if (this.hungry>100){
        this.hungry = 100;
    } else if (this.hungry< 0){
        this.hungry = 0;
    }
  }

  estado() {
    this.estabilizar();
    return `
        Estado actual de su mascota 
        Energia: ${this.energy}
        Felicidad: ${this.happiness}
        Hambre: ${this.hungry}
        `;
  }

  play() {
    this.happiness = this.happiness + 30;
    this.energy = this.energy - 25;
    this.hungry = this.hungry - 30;
    console.log("Jugando...");
    this.estabilizar();
  }

  eat() {
    this.happiness = this.happiness + 10;
    this.hungry = this.hungry + 25;
    console.log("Comiendo...");
    this.estabilizar();
  }

  sleep() {
    this.happiness = this.happiness - 10;
    this.energy = this.energy + 50;
    console.log("Durmiendo...");
    this.estabilizar();
  }
}





