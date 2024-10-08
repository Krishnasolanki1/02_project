import React from 'react'

const TodosList = ({ todos, setTodos, setEditTodo }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, comleted: !item.comleted }
                }
                return item;
            })
        )
    }
    return (
        <div>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id}>

                    <input type='text'
                        value={todo.title}
                        className={`list ${todo.comleted ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()} />
                    <div>
                        <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                            <i className='fa fa-check-circle'></i>
                        </button>
                        <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                            <i className='fa fa-trash'></i>
                        </button>


                    </div>

                </li>
            ))}
        </div>
    )
}

export default TodosList