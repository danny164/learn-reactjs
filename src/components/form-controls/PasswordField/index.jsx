import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disable: PropTypes.bool,
};

PasswordField.defaultProps = {
    label: '',
    disable: false,
};

function PasswordField(props) {
    const { form, name, label, disable } = props;
    const { control } = form;

    console.log(form);

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((x) => !x);
    };

    return (
        <>
            <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <Controller
                    name={name}
                    control={control}
                    render={({
                        field: { onChange, onBlur, value, name },
                        fieldState: { invalid, error },
                    }) => (
                        <>
                            <OutlinedInput
                                id={name}
                                type={showPassword ? 'text' : 'password'}
                                label={label}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={toggleShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={invalid}
                                onChange={onChange}
                                onBlur={onBlur}
                                name={name}
                                value={value}
                                disabled={disable}
                            />
                            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
                        </>
                    )}
                />
            </FormControl>
        </>
    );
}

export default PasswordField;
