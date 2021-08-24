import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const { onSubmit } = props;

    const form = useForm({
        defaultValues: {
            title: '',
        },
    });

    const handleSubmit = (values) => {
        onSubmit(values);
    };

    return (
        <>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="title" label="Todo Form" form={form} />
            </form>
        </>
    );
}

export default TodoForm;
