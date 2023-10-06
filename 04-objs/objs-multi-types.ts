(() => {
    //* Multiples Types en objetos

    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?:() => string;
    }

    let myCustomVar: string | Hero | number = "Manuel";
})()