import {NavLink} from "react-router-dom";
import { useState } from "react";

import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '128px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 568,
    bgcolor: 'background.paper',
    borderRadius: '12px',
    p: 4,
    boxShadow: '0px 2px 4px rgba(7, 4, 146, 0.1), 0px 24px 60px rgba(6, 47, 125, 0.05), 0px 12px 24px rgba(27, 59, 119, 0.05)',
  };

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
                <Container sx={style}>
                    <Typography variant="h3">Sign up for Tripma</Typography>
                </Container>
            </Modal>
        </Container>
    )
};

export default Header