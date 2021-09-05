import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },

    title: {
        margin: theme.spacing(2, 0),
        textAlign: 'center',
    },

    submit: {
        margin: theme.spacing(2, 0),
    },
}));

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
        title: yup.string().required('Please enter title').min(5, 'Too short'),
    });

    const { onSubmit } = props;

    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            rePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    };

    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Create an account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullname" label="Full name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <InputField name="password" label="Password" form={form} />
                <InputField name="rePassword" label="Re-Password" form={form} />

                <Button className={classes.submit} variant="contained" color="primary" fullWidth>
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
