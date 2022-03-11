import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import Slide from '@material-ui/core/Slide';

function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        // console.log('Form submit', values);

        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            // do something here on register successfully
            const { closeDialog } = props;
            if (closeDialog) closeDialog();

            enqueueSnackbar('Login Successfully!', {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                },
                TransitionComponent: Slide,
            });
        } catch (error) {
            // console.log('Failed to register:', error);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

Login.propTypes = {
    closeDialog: PropTypes.func,
};

export default Login;
