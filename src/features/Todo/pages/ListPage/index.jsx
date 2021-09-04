// Type: rfcp

import React, { useState, useEffect, useMemo } from 'react';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

//  ! TodoFeature: Parent Container contains the value (a todoList Array)
//  but doesn't know how to render
//  so it needs a component TodoList to help
//////////////////////////////////////
function ListPage(props) {
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
    //////////////////////////////////////

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initTodoList);

    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);

        console.log(location); // { "pathname": "/", "search": "?status=new",...}
        console.log(params); // { "status": "new" }

        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, index) => {
        const newTodoList = [...todoList];

        const newTodo = {
            ...newTodoList[index],

            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };

        newTodoList[index] = newTodo;

        setTodoList(newTodoList);
    };

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit', values);

        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',
        };

        const newTodoList = [...todoList, newTodo];

        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        // setFilteredStatus('all');

        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const handleShowCompletedClick = () => {
        // setFilteredStatus('completed');

        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const handleShowNewClick = () => {
        // setFilteredStatus('new');

        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });

        console.log(history);
    };

    const renderedTodoList = useMemo(() => {
        return todoList.filter(
            (todo) => filteredStatus === 'all' || filteredStatus === todo.status
        );
    }, [todoList, filteredStatus]);

    return (
        <div>
            <h3>Todo Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

ListPage.propTypes = {};

export default ListPage;
