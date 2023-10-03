(() => {

    //* Enums
    // Se define con la palabra reservada enum
    // también es bueno utilizar UpperCamelCase
    enum AudioLevel {
        min = 'Min',
        medium = 'Med',
        max = 'Max'
    }

    let currentAudio = AudioLevel.medium;
    console.log({ currentAudio });
})()