(() => {
    //* Exclude
    // Esta utilidad permite crear uniones de tipos, 
    // excluyendo la llave mencionada

    type Fruit = "apple" | "banana" | "orange";
    
    // Ahora solo puede ser apple || banana
    type AppleBanana = Exclude<Fruit, "orange">;
    
    let m:AppleBanana = "apple";
    m = "banana";
    // m = "orange" //! Error: "orange" cannot be assigned to "apple" | "banana"


    // También puede trabajar con objetos
    type Event = 
        | { type: "click"; x: number; y: number }
        | { type: "focus" }
        | { type: "change"; value: string };

    type ClickAndFocusEvent = Exclude<Event, { type: "click" }>; 
    // { type: 'focus' } | { type: 'change', value: string }
    
    // Una manera más flexible de trabajar con esta utilidad
    // es dando una forma general del objetos u objetos que 
    // queremos excluir del tipo
    type Routes =
        | { route: "/user"; search: { id: string }; }
        | { route: "/user/create" }
        | { route: "/user/edit"; search: { id: number };
    };

    // Excluye a todos los que tengan la propiedad de search
    type RoutesWithoutSearch = Exclude< Routes,{ search: any }>;
    // type RoutesWithoutSearch = { route: "/user/create" }
    
})()