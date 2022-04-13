import React from 'react';
import Stack from '@mui/material/Stack';

function Nav(props) {

    return (
    <div>
        <Stack direction="row" spacing={2} style={{margin:"0px 0px 0px 0px"}}>
            <img src={`${process.env.PUBLIC_URL}/logos.png`} alt='logo' width="120px" align="right" style={{margin:"0px 0px 0px 0px", padding:"0px"}}></img>
        </Stack>
    </div>
    );
}

export default Nav;