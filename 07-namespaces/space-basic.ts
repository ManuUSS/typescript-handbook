namespace Validations {

    //* Los namespaces no suelen ser vistos de manera ordinaria
    //* generalmente son más utilizados por dentro de los frameworks
    //* como Vue, Angular, React + TS, es decir, en la construcción de estos.

    export const validateText = ( text: string ):boolean => {
        return ( text.length > 3 ) ? true : false;
    }


    export const validateDate = ( myDate: Date ):boolean => {
        return ( isNaN( myDate.valueOf() ) )
            ? false
            : true
    }

}

console.log( Validations.validateText("Manu") );
const d = new Date();
console.log( Validations.validateDate( d ) );