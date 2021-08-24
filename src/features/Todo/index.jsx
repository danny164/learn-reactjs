import React from 'react';
import FormPage from './pages/FormPage';
import ListPage from './pages/ListPage';

function TodoFeature(props) {
    return (
        <div>
            <ListPage />

            <FormPage />
        </div>
    );
}

TodoFeature.propTypes = {};

export default TodoFeature;
