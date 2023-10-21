(() => {
    //* Pick
    // Construye un tipo seleccionando el conjunto de propiedades 'Keys'

    // Se crea una interfaz
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }
    
    // Uso de la utilidad con un type
    type TodoPreview = Pick<Todo, "title" | "completed">;

    // Uso de la utilidad con una intefaz
    interface TodoLik extends Pick<Todo, "description" | "title">{};
    
       
    const todo: TodoPreview = {
        title: "Clean room",
        completed: false,
    };
})()