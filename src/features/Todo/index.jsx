// Type: rfcp

import React, { useState } from 'react';
import TodoList from './components/TodoList';

//  ! TodoFeature: Parent Container contains the value (a todoList Array)
//  but doesn't know how to render
//  so it needs a component TodoList to help
//
function TodoFeature(props) {
    //
    //  Creat an array contains objects
    const initTodoList = [
        {
            id: 1, // ? used to key value
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    // TODO 1. Create a useState with initialize value
    const [todoList, setTodoList] = useState(initTodoList);

    //////////////////////////////////////
    // ! To update a state for a item we need to know the index item in array
    // * By that way we can change it's status
    // TODO 2.1 This function help us to change status
    //////////////////////////////////////
    // ! 3 Ways to Copy Objects in JavaScript
    // * Use the spread (...) syntax
    // - Use the Object.assign() method
    // - Use the JSON.stringify() and JSON.parse() methods
    // https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/

    const handleTodoClick = (todo, index) => {
        //////////////////////////////////////
        console.log(todo, index);
        //////////////////////////////////////
        // TODO 2.2
        // * clone current array to the new one
        const newTodoList = [...todoList];
        //////////////////////////////////////
        // TODO 2.3
        // * toggle state
        const newTodo = {
            // using shallow copy to take all properties at the index
            ...newTodoList[index],
            // then change only status
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };
        //////////////////////////////////////
        // TODO 2.4
        newTodoList[index] = newTodo;

        //////////////////////////////////////
        // ! The way 2: we can combine 2.3 & 2.4 as follows
        // Mình muốn cập nhật vô cái vị trí index đó
        // * newTodoList[index] = {
        //   Với những giá trị hiện tại của nó
        //   * ...newTodoList[index],
        //   Đồng thời mình cũng thy đổi cái status của nó
        //   * status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        // * };
        //////////////////////////////////////

        // TODO 2.5
        // * update todo list
        //////////////////////////////////////
        setTodoList(newTodoList);
        //////////////////////////////////////
    };

    //////////////////////////////////////
    // Render Child Component with Parent's Data via props `todoList`
    // Inside curly braces {} the input value is an array also named { todoList }
    //////////////////////////////////////
    // TODO 2: For each click, we need to report the event from child to parent
    // ? Where to report? a `handleTodoClick` function via `onTodoClick` props*/
    // * And the function will be callback after each click
    // * Add `onTodoClick={handleTodoClick}` and go to 2.1
    //////////////////////////////////////
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

// Declare TodoFeature in App to show UI

TodoFeature.propTypes = {};

export default TodoFeature;
