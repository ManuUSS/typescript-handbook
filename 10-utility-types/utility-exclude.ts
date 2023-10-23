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
    
})()