// TODO 3.
// **** Type: rfcp

import React from 'react';
import PropTypes from 'prop-types';

// ! TodoList: Child Component
function TodoList(props) {
    // TODO 6.
    const { todoList } = props;
    return (
        // TODO 7.
        <ul>
            {
                // * traverse the array todoList via . map
                // * for each todo, create a JSX use the parathesis ()
                // ****
                todoList.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))
            }
        </ul>
    );
}

TodoList.propTypes = {
    // TODO 4.
    // **** Declare an array called todoList, and no required the value
    todoList: PropTypes.array, // ? isRequired
};

TodoList.defaultProps = {
    // TODO 5.
    // **** So, need a default value if the data is empty
    todoList: [], // ? if not, give an empty array
};

export default TodoList;
