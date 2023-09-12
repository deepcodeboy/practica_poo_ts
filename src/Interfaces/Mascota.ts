export interface Mascota {
    id: number;
    typeOfAnimal: string;
    name: string;
    energy: number;
    happiness: number;
    hungry: number;
    play(): void;
    eat(): void;
    sleep(): void;
}