import { Forma } from "../Interfaces/FormaGeo";

//Clase para la calculadora de geometria
export class Geometria {
    constructor(private forma: Forma){

    }

    area() {
        return this.forma.calculoArea()
    }
}

//Clase para rectangulos
export class Rectangulo implements Forma {
    constructor(private alto: number, private ancho: number){

    }

    calculoArea(): number {
        console.log('Area del rectangulo: ');
        return this.alto * this.ancho
    }

    calculoPerimetro(): number {
        console.log('Perimetro del rectangulo: ');
        return (this.alto + this.ancho) *2
    }
}

//Clase para circulos
export class Circulo implements Forma {
    constructor(private radio: number){

    }

    calculoArea(): number {
        console.log('Area del circulo: ');
        return Math.PI * (this.radio)**2
    }

    calculoPerimetro(): number {
        console.log('Perimetro del circulo: ');
        return 2*Math.PI * this.radio
    }
}

//Clase para triangulos rectangulos
export class TrianguloRectangulo implements Forma {
    constructor(private alto: number, private ancho: number){

    }

    calculoArea(): number {
        console.log('Area del triangulo: ');
        return (this.alto * this.ancho)/2
    }

    calculoPerimetro(): number {
        console.log('Perimetro del triangulo: ');
        return this.alto + this.ancho + Math.sqrt(this.ancho**2 + this.ancho**2)
    }
}