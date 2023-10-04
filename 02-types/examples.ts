(() => {

    // Tipos
    const batman:string   = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Power {
        PowerI = 0,
        PowerII = 1,
        PowerIII = 5,
        PowerIV = 100
    }
    const fuerzaFlash = Power.PowerIII;
    const fuerzaSuperman = Power.PowerIV;
    const fuerzaBatman = Power.PowerII;
    const fuerzaAcuaman = Power.PowerI;
  
    // Retorno de funciones
    function activar_batiseñal():string {
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: string = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );
  
  
  })()
  
  