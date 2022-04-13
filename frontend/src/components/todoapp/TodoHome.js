import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box} from '@mui/system';
import Nav from './Nav';
import Newtodo from './Newtodo';
import Tododeletion from './Tododeletion';
import "./todo.css"
function TodoHome(props) {
    const [todoDetails, setToDoDetails] = useState([]);

    
    useEffect(()=>{
        fetchToDoData();
    },[])
    
    //Status Upadating
    async function statusok(id,statusInfo){
        
        //Makng status as OK
        if(statusInfo == null || statusInfo === "notcompleted")
        {
        const status = "completed";
        window.location.reload(false);
        await fetch(`http://localhost:8989/underlined/${id}`,{
            method:'put',
            body:JSON.stringify({status}),
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': "*"
            }
        })      
            window.location.reload(false);
    }

    //Makng status as "notok"
        else if(statusInfo==="completed"){
        window.location.reload(false);
        const status = "notcompleted";
        await fetch(`http://localhost:8989/underlined/${id}`,{
            method:'put',
            body:JSON.stringify({status}),
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': "*"
            }
        })
    }
    }

    //Fetching All Todo Data
    async function fetchToDoData(){
        const response = await fetch(`http://localhost:8989/findAllToDo`,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': "*"
            }
        });
        const body = await response.json();
        setToDoDetails(body);
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        margin: 10,
        color: theme.palette.text.secondary,
    }));

    return (
        <Container maxWidth="lg" fixed>

            <Nav />
            <Newtodo/>
            
                {/* TASK LIST */}

                {todoDetails.map((i,key)=>(
                    <Grid container spacing={2} key={key}>
                    <Grid item xs={12}>
                      <Item>
                        <Grid container spacing={2}>

                    {/* Ternery if else starts here */}

                    { i.status === "completed" 
                     ?
                    <>
                        <Grid item xs={2}>
                            <Box style={{display: "flex", alignSelf:"center"}}>
                               <input checked className="checked" type="checkbox" style={{height:"100px", width:"30px",padding:"10px"}} onChange={()=>statusok(i.id,i.status)}/>
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <h2 className="underlineThis" style={{textDecoration:"line-through"}}>{i.todoName}</h2>
                            <p  className="underlineThis" style={{textDecoration:"line-through"}}>{i.todoDesc}</p>
                        </Grid>
                        <Grid item xs={1}>
                            <Tododeletion id={i.id}/>
                         </Grid>
                     </>
                     :
                     <>
                        <Grid item xs={2}>
                            <Box style={{display: "flex", alignSelf:"center"}}>
                            <input className="NotChecked" type="checkbox" style={{height:"100px", width:"30px",padding:"10px"}} onChange={()=>statusok(i.id)}/>
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <h2 className="NoUnderline">{i.todoName}</h2>
                            <p className="NoUnderline">{i.todoDesc}</p>
                        </Grid>
                        <Grid item xs={1}>
                            <Tododeletion id={i.id}/>
                        </Grid>
                    </>
                      }
                      {/* Ternery if else ends here */}
                    </Grid>
                 </Item>
                </Grid>
                </Grid>
                ))
                }
                {/* Map Ends Here */}
            
        </Container>
    );
}

export default TodoHome;