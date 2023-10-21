(() => {
    //* Required
    // Construye un tipo que consta de todas las propiedades de 'Type' establecidas como obligatorias. 
    // Es lo opuesto a Partial

    interface Props {
        a?: number;
        b?: string;
    }
    
    // Sus propiedas son opcionales
    const obj: Props = { a: 5 };
       
    // const obj2: Required<Props> = { a: 5 }; //! Error: La propiedad b es requerida
})()