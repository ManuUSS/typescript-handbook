(() => {

    //* For Of

    type Avenger = {
        name: string;
        weapon: string
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }
    
    const capAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Shield'
    }
    
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers:Avenger[] = [ ironman, capAmerica, thor ];

    for ( const avenger of avengers ) {
        console.log( avenger );
    }

})()