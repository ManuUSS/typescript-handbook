(() => {
    //* Omit
    // Construye un tipo tomando todas las propiedades de "Tpe" y 
    // luego eliminando las "Keys", es lo opuesto a "Pick"

    // Se crea una interfaz
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
        createdAt: number;
    }
       
    // Uso con type
    type TodoPreview = Omit<Todo, "description">;
    
    // Uso con interfaz
    interface ITodoPreview extends Omit<Todo, "description">{}
    
    const todo: TodoPreview = {
        title: "Clean room",
        completed: false,
        createdAt: 1615544252770,
    };
    
    // Uso con type
    type TodoInfo = Omit<Todo, "completed" | "createdAt">;

    // Uso con interfaz
    interface ITodoInfo extends Omit<Todo, "completed" | "createdAt">{}

    const todoInfo: ITodoInfo = {
        title: "Pick up kids",
        description: "Kindergarten closes at 5pm",
    };
    
    todoInfo;
})()