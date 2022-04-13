import React from 'react';
import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskForm from './TaskForm';

function Newtodo(props) {


    const [show, setShow] = React.useState(false);
    const container = React.useRef(null);
  
    const handleClick = () => {
      setShow(!show);
    };

    return (
        <div>

        <Stack>
          <Button onClick={handleClick} >
            <AddIcon/> NEW TASK
          </Button> 
        </Stack>

      <Box sx={{ p: 1, pb:2, my: 1 }}>
        {show ? (
          <Portal container={container.current} >
              {/* Task form */}
              <TaskForm />
         </Portal>
        ) : null}
      </Box>
      
      <Box ref={container} sx={{ p: 1, my: 1 }}/>

      </div>
    );
}

export default Newtodo;