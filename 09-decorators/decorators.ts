function BlockPrototype( constructor: Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

function CheckValidPokemon():Function {
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        const originalFn = descriptor.value;
        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800 ) {
                return console.error('El id del pokemon no existe')
            } else {
                return originalFn( id );
            }
        }
    }
}

function ReadOnly( isWritable: boolean = true ):Function {
    return function ( target: any, propertyKey: string ) {
        const descriptor:PropertyDescriptor = {
            get() {
                return 'Manuel'
            },
            set( this, val ) {
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}



export class Pokemon {

    @ReadOnly()
    public publicApi: string = "https://pokeapi.co"

    constructor ( public name: string ) {}

    @CheckValidPokemon()
    savePokemon( id: number ) {
        console.log(`Pokemon guardado ${ id }`);
    }
}