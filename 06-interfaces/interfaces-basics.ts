(() => {
    //* Intro a interfaces

    // Las interfaces funcionan casi igual que los types
    // tiene diferencias en tipado, sin embargo la más importante
    // es que un type no puede ser extendible, un interface sí
    interface Hero {
        name: string;
        age: number;
        powers: string[];
        getName?:() => string;
    }

    // Con type esto daría un error
    interface Hero {
        id: number;
    }

    let superMan: Hero = {
        id: 12254,
        name: 'Clark Kent',
        age: 60,
        powers: [ 'Super fuerza' ],
        getName() {
            return this.name;
        }
    }
})()