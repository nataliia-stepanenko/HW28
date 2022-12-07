import {NavLink} from "react-router-dom";
import { useState } from "react";

import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import LoginForm from "./LoginForm";

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container >
            <Box className="list">
                <Link><NavLink className={({isActive}) => (isActive? "active" : "")} to="/" end>Home</NavLink></Link>
                <Link><NavLink className={({isActive}) => (isActive? "active" : "")} to="users">Users</NavLink></Link>
                <Link><NavLink className={({isActive}) => (isActive? "active" : "")} to="hotels">Hotels</NavLink></Link>
            </Box>
            <Button onClick={handleOpen}>Sign In</Button>
            <Modal  open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                <Container className='modal' sx={{width: '568px'}}>
                    <Stack sx={{marginBottom: '12px', paddingX: '22px'}} direction="row" alignItems="flex-end" justifyContent="space-between" width="100%">
                        <Typography variant="h3">Sign in</Typography>
                        <IconButton onClick={handleClose} aria-label="close" sx={{marginBottom:"-7px"}}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Typography sx={{paddingX: '22px'}} variant="subtitle1">Tripma is totally free to use. Sign up using your email address or phone number below to get started.</Typography>
                    <LoginForm />
                </Container>
            </Modal>
        </Container>
    )
};

export default Header