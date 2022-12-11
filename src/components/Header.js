import {NavLink} from "react-router-dom";
import { useState, useContext } from "react";

import AuthContext from "../contexts/auth/AuthContext";
import LoginForm from "./LoginForm";

import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {userInfo, isLoggedIn, logoutUser} = useContext(AuthContext);

    return (
        <Container >
            <Box className="list">
                <Link><NavLink className={({isActive}) => (isActive? "active" : "")} to="/" end>Home</NavLink></Link>
                <Link><NavLink className={({isActive}) => (isActive? "active" : "")} to="users">Users</NavLink></Link>
                <Link><NavLink className={({isActive}) => (isActive? "active" : "")} to="hotels">Hotels</NavLink></Link>
            </Box>
            {isLoggedIn && <><Button onClick={logoutUser} sx={{marginX: 0}}>Log Out</Button> <img className="user_img" src={userInfo.image} alt={userInfo.firstName + "" + userInfo.lastName}></img></>}
            {!isLoggedIn && <Button onClick={handleOpen}>Log In</Button>}
            {!isLoggedIn && 
            <Modal  open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                <Box className='modal' sx={{width: '568px'}}>
                    <Stack sx={{marginBottom: '12px', }} direction="row" alignItems="flex-end" justifyContent="space-between" >
                        <Typography variant="h3">Log In</Typography>
                        <IconButton onClick={handleClose} aria-label="close" sx={{marginBottom:"-7px", marginRight:"-10px"}}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <Typography sx={{}} variant="subtitle1">Tripma is totally free to use. Sign up using your email address or phone number below to get started.</Typography>
                    <LoginForm />
                </Box>
            </Modal>}
        </Container>
    )
};

export default Header