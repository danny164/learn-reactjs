// Todo 1. Type: rfcp

import React from 'react';
import TodoList from './components/TodoList';

// ! TodoFeature: Parent Container contains the value (a todoList Array)
// * but doesn't know how to render
// * so it needs a component TodoList to help
// *****
function TodoFeature(props) {
    //  Todo 2. create...
    //  **** an array contains objects
    const todoList = [
        {
            id: 1, // ? used to key value
            title: 'Eat',
        },
        {
            id: 2,
            title: 'Sleep',
        },
        {
            id: 3,
            title: 'Code',
        },
    ];
    // !
    // TODO 8. Render Child Component with Parent's Data via props `todoList`
    // **** Inside curly braces {} the input value is an array also named { todoList }
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

// TODO 9.
// **** Declare TodoFeature in App to show UI

TodoFeature.propTypes = {};

export default TodoFeature;
