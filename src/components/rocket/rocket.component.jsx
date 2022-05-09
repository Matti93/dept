import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { RocketContainer, ButtonContainer } from './rocket.styled';

export const RocketComponent = (props) => {
    const { open, handleClose, rocket } = props;
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <RocketContainer>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <ButtonContainer variant="contained" onClick={handleClose}>Back</ButtonContainer>
                        <img
                            src={rocket.flickr_images[0]}
                            alt='rocket'
                            loading="lazy"
                            width='200px'
                        />
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {rocket.rocket_name}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </RocketContainer>
    );
}