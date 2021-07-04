import React, { useEffect, useState } from 'react';
import todoApi from '../../api/todoApi';
import TodoCounter from './components/TodoCounter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.scss';

Todo.propTypes = {};

function Todo(props) {
    const [todos, setTodos] = useState([]);
    const [valueUpdate, setValueUpdate] = useState({});
    const [selectedTodo, setSelectedTodo] = useState(null);

    //toggle class updating
    const todoNode = document.querySelector('.todo-app');

    //fetch api by axios
    useEffect(() => {
        //this side effect is executed once after rendering
        const fetchTodos = async () => {
            try {
                const todoData = await todoApi.getAll();
                setTodos(todoData);
            } catch (error) {
                console.error('Failed to fetch data.');
            }
        };
        fetchTodos();
    }, []);

    const handleFormSubmit = async (formValues) => {
        const isEdit = Boolean(formValues?.id);

        if (isEdit) {
            await todoApi.update(formValues);
        } else {
            await todoApi.add({
                ...formValues,
                status: 'new',
            });
        }

        const todoData = await todoApi.getAll();
        setTodos(todoData);
    };

    //Edit item todo
    const handleEditClick = (todo) => {
        setSelectedTodo(todo);

        // TODO: Remove todoNode
        todoNode.classList.toggle('updating');
        console.log('todo: ', todo);
        setValueUpdate(todo);
    };

    //patch item todo
    const handleUpdateStatus = async (todo) => {
        try {
            const newTodo = {
                ...todo,
                status: todo.status === 'done' ? 'new' : 'done',
            };

            await todoApi.update(newTodo);

            const todoData = await todoApi.getAll();
            setTodos(todoData);
        } catch (error) {
            console.error('Failed to toggle state');
        }
    };

    //delete todo form value
    const handleDeleteClick = async (todo) => {
        try {
            await todoApi.remove(todo.id);
            const todoData = await todoApi.getAll();
            setTodos(todoData);
        } catch (error) {
            console.error('Failed to delete todo');
        }
    };

    //rendering
    return (
        <div className="todo-app">
            <div className="todo-heading">
                <h2 className="todo-heading__title">Plans for today</h2>
                <span className="todo-heading__counter">
                    <TodoCounter todosLength={todos.length} />
                </span>
            </div>

            <TodoForm initialValues={selectedTodo} onSubmit={handleFormSubmit} />

            <TodoList
                todos={todos}
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
                onUpdateStatus={handleUpdateStatus}
            />
        </div>
    );
}

export default Todo;
