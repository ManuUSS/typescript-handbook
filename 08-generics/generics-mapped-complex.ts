(() => {

    //* Tipos mapeados


    // En ciertos escenarios es posible que queramos hacer tipos, más complejos
    // como por ejemplo, dado un tipo mapear sus llaves y valores posibles y transformarlos
    //? Para situaciones como las mencionadas no es posible utilizar interfaces, por lo que debemos usar map
    type MyMappedGenericPartial<T> = {
        // [ prop in keyof T ] Creo una llave que apunta a T
        // T[ prop ] obtengo el tipo de valor que se guarda en esa llave
        [ prop in keyof T ]?: T[ prop ];
    }
    
    type MyMappedGenericNumber<T> = {
        // [ prop in keyof T ] Creo una llave que apunta a T
        // T[ prop ] obtengo el tipo de valor que se guarda en esa llave
        [ prop in keyof T ]?: number;
    }

    type MyMappedGenericConcrete<T> = {
        // [ prop in keyof T ] Creo una llave que apunta a T
        // T[ prop ] obtengo el tipo de valor que se guarda en esa llave
        [ prop in keyof T ]-?: number;
    }

    interface User {
        name: string;
        userName:string;
        email:string;
        age: number;
    }
    interface UserMaybe {
        name: string;
        userName?:string;
        email?:string;
        age?: number;
    }

    // Todas las propiedades se transforman en opcional
    type PartialUser = MyMappedGenericPartial<User>; 
    
    // Todas las propiedades se transforman a valor numerico
    type NumberUser  = MyMappedGenericNumber<User>; 
    
    // Todas las propiedades se transforman a obligatorias
    type ConcreteUser = MyMappedGenericConcrete<UserMaybe>; 

})()