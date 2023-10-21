(() => {
    //* Partial

    // Construye un tipo con todas las propiedades de 'Type' establecidas como opcionales. 
    // Esta utilidad devolverá un tipo que representa todos los subconjuntos de un tipo dado.

    interface Todo {
        title: string;
        description: string;
    }
       
    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
        return { ...todo, ...fieldsToUpdate };
    }
       
    const todo1 = {
        title: "organize desk",
        description: "clear clutter",
    };
       
    // Descripción es opcional ahora
    const todo2 = updateTodo(todo1, {
        description: "throw out trash",
    });
    
})()