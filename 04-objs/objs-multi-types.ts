(() => {
    //* Multiples Types en objetos

    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?:() => string;
    }

    let myCustomVar: ( string | Hero | number ) = "Manuel";
    console.log( typeof myCustomVar );
    
    myCustomVar = 20;
    console.log( typeof myCustomVar );
    
    myCustomVar = {
        name: 'Manuel Ulate',
        age: 20,
        powers: ['Coding']
    }
    console.log( typeof myCustomVar );

})()