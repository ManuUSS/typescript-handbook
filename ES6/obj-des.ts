(() => {

    //* Desestructuració de objetos

    type Avangers = {
        nick: string;
        ironMan: string;
        vision: string;
        active: boolean;
        power: number;
    }

    // Objeto a desestructurar
    const avengers:Avangers = {
        nick: 'Samuel L Jackson',
        ironMan: 'Robert Downey Jr',
        vision: 'Paul Bettan',
        active: true,
        power: 1500
    }

    // Con las {} se destructuran las propiedades de un objeto
    // en este tipo de desestructuramiento no importa el orden, 
    // solamente el nombre de las propiedades (debe ser el mismo).
    const { active, nick, power } = avengers;
    console.log( active, nick, power );
})();