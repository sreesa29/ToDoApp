import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Tododeletion(props) {
    const {id} = props;

    async function deleteTodo(){
        await fetch(`http://localhost:8989/delete/${id}`,{
                 method:"delete",
                 headers:{
                    'Accept': 'application/json',
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': "*"
                }
             })
             alert("Deleted Successfully")
             window.location.reload(false);
    }
    return (
        <div>
            <DeleteIcon cursor="pointer" onClick={deleteTodo}/>
        </div>
    );
}

export default Tododeletion;