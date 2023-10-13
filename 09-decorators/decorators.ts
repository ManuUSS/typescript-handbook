
const printClg = ( constructor: Function ) => {
    console.log( constructor );
}

const printClgConditional = ( print: boolean = false ):Function => {
    if( print ) {
        return printClg
    }
    return () => {}
}

const blockPrototype = function( constructor: Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

