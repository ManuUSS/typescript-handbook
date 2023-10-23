(() => {

    //* Non Nullable
    // Construye un nuevo tipo EXCLUYENDO las propiedades null o undefined
    // del Tipo utilizado

    type UserCode = string | number | undefined | null;

    interface User {
        name: string;
        age: number;
        password: string;
        code: NonNullable<UserCode>
    }

    

})()