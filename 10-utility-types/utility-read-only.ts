(() =>{
    //* Read Only
    // Construye un tipo con todas las propiedades de 'Type' establecidas como de solo lectura, 
    // lo que significa que las propiedades del tipo construido no pueden ser reasignadas.

    interface Todo {
        title: string;
    }
       
    const todo: Readonly<Todo> = {
        title: "Delete inactive users",
    };
       
    // todo.title = "Hello"; 
    //! Error: Cannot assign to 'title' because it is a read-only property.

})()