//
// Type: rfcp

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

// ! TodoList: Child Component
function TodoList(props) {
    //////////////////////////////////////
    const { todoList, onTodoClick } = props;

    // onTodoClick chính là props mà thằng cha truyền xuống nhaa!
    //////////////////////////////////////
    // TODO 2.3 Đây là hàm mình sẽ handle khi nó đc click
    // const handleTodoClick = () => {}
    // const handleTodoClick = (todo, index) => {}
    const handleTodoClick = (todo, index) => {
        //////////////////////////////////////
        // TODO 2.5 Sau đó mình mình phải kiểm tra
        // * nếu onTodoClick thằng cha có truyền props xuống,
        // * nó có truyền á thì mình mới làm, còn không thì thôi return;
        //////////////////////////////////////
        // ? Nếu như mà không truyền xuống, thì không làm gì cả
        if (!onTodoClick) return;
        //////////////////////////////////////
        // ? else, send to parent 2 params (todo, index) via props
        // * gọi hàm truyền xuống là onTodoClick và truyền vào 2 tham số là (todo, index)
        //////////////////////////////////////
        onTodoClick(todo, index);
    };

    //////////////////////////////////////
    return (
        <>
            <ul className="todo-list">
                {
                    //  traverse the array todoList via . map
                    //  for each todo, create a JSX use the parathesis ()
                    //////////////////////////////////////
                    //  TODO 1.1 todoLis.map((todo)) => {}
                    //  * <li key={todo.id}>{todo.title}</li>
                    //////////////////////////////////////
                    //  TODO 1.2 npm i --save classnames
                    //  * pass inside classnames will be an object
                    //////////////////////////////////////
                    //  * onClick={}
                    //  TODO 2.4 for each click, pls help me call handleTodoClick function
                    //  * with 2 params todo and index
                    //  * onClick={() => handleTodoClick(todo, index)}
                    //////////////////////////////////////
                    //  Khi mà cái li được click á mình sẽ làm cái gì đây?
                    //  À mình sẽ gọi cái hàm handleTodoClick này
                    //  Sau đó, mình sẽ truyền vào thứ 1 là cái todo, thứ 2 là cái index
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
        </>
    );
}

TodoList.propTypes = {
    // Declare an array called todoList, and no required the value
    todoList: PropTypes.array, // ? isRequired

    // TODO 2.1 Khi mình click, mình khai báo onTodoClick
    // * Thằng cha sẽ truyền xuống cho mình, rồi mình sẽ nói nó là 1 func
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    // So, need a default value if the data is empty
    todoList: [], // ? if not, give an empty array

    // TODO 2.2 Trường hợp này function ko có require nên có thể bị null
    // Mình sẽ handle tới một cái hàm có tên handleTodoClick. Go to 2.3
    onTodoClick: null,
};

export default TodoList;
