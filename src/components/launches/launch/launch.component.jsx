import { CardContainer } from './launch.styled';
import { Typography } from "@mui/material";
import { RocketComponent } from '../../rocket/rocket.component';
import { useState } from 'react';

export const LaunchComponent = ({ launch }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return <>
        <CardContainer onClick={handleOpen}>
            <Typography component='h3' variant='h3'>
                Launch #{launch.flight_number}
            </Typography>
            <Typography component='p' variant='p'>
                {launch.details || 'No description'}
            </Typography>
        </CardContainer>
        <RocketComponent open={open} handleClose={handleClose} rocket={launch.rocket} />
    </>
}