//
// Type: rfcp

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

// ! TodoList: Child Component
function TodoList(props) {
    const { todoList, onTodoClick } = props;

    // TODO 1.4
    const handleTodoClick = (todo, index) => {
        // ? check props, if not data, will do nothing
        if (!onTodoClick) return;
        console.log(onTodoClick);

        // ? else, send to parent 2 params (todo, index) via props
        onTodoClick(todo, index);
    };

    // !
    return (
        //
        <ul className="todo-list">
            {
                //  traverse the array todoList via . map
                //  for each todo, create a JSX use the parathesis ()
                //  TODO 1.1 todoLis.map((todo)) => {}
                //  * <li key={todo.id}>{todo.title}</li>
                //  TODO 1.2 npm i --save classnames
                //  * pass inside classnames will be an object
                //  TODO 1.3 for each click, help me call handleTodoClick function
                //  * with 2 params todo and index

                todoList.map((todo, index) => (
                    <li
                        key={todo.id}
                        className={classnames({
                            'todo-item': true,
                            completed: todo.status === 'completed',
                        })}
                        onClick={() => handleTodoClick(todo, index)}
                    >
                        {todo.title}
                    </li>
                ))
            }
        </ul>
    );
}

TodoList.propTypes = {
    // Declare an array called todoList, and no required the value
    todoList: PropTypes.array, // ? isRequired

    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    // So, need a default value if the data is empty
    todoList: [], // ? if not, give an empty array
    onTodoClick: null,
};

export default TodoList;
