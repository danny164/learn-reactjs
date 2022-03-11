import { IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
        zIndex: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <GitHubIcon className={classes.menuButton} />

                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to="/">
                            DANNY
                        </Link>
                    </Typography>

                    <NavLink className={classes.link} to="/todos">
                        <Button color="inherit">Todo</Button>
                    </NavLink>

                    <NavLink className={classes.link} to="/albums">
                        <Button color="inherit">Album</Button>{' '}
                    </NavLink>

                    <NavLink className={classes.link} to="/register">
                        <Button color="inherit" onClick={handleClickOpen}>
                            Register
                        </Button>{' '}
                    </NavLink>
                </Toolbar>
            </AppBar>

            <Dialog
                disableEscapeKeyDown
                disableBackdropClick
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <IconButton className={classes.closeButton} onClick={handleClose}>
                    <Close />
                </IconButton>
                <DialogContent>
                    <Register closeDialog={handleClose} />
                </DialogContent>
            </Dialog>
        </div>
    );
}
