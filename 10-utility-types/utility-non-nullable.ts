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

    const user:User = {
        name: "Manuel",
        age: 20,
        password: "123544",
        // code: undefined; //! Error: undefined no puede ser asignado a string o number
        code: "20201"
    }

})()