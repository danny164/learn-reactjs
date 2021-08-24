import React from 'react';
import TodoForm from '../../components/TodoForm';

function FormPage(props) {
    const handleTodoFormSubmit = (values) => {
        console.log('Form submit', values);
    };

    return (
        <div>
            <h3>Todo Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
        </div>
    );
}

FormPage.propTypes = {};

export default FormPage;
