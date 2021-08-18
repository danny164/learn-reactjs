import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

function Register(props) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        // console.log('Form submit', values);

        try {
            // auto set user name = email
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // do something here on register successfully

            console.log('New user', user);
        } catch (error) {
            console.log('Failed to register:', error);
        }
    };

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

Register.propTypes = {};

export default Register;
