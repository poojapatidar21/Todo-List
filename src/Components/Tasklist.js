import React, { useState } from 'react';
import { Button, Container,Row } from 'react-bootstrap';
import Taskform from './Taskform';

function Tasklist() {
    
    const [tasks, settasks] = useState([]);
    let arr = [];
    const [showcompletedtask,setshowcompletedtask] = useState(false);
    const strikeout = (id,index,name) => {

        if (document.getElementsByClassName(`id${id}`)[0].style.color === 'red') {
            
            document.getElementsByClassName(`id${id}`)[0].style.color = 'black';
            document.getElementsByClassName(`id${id}`)[0].style.textDecoration = 'none';
           
            arr.splice(index,1)

            
        }
        else {
        
            document.getElementsByClassName(`id${id}`)[0].style.color = 'red';
            document.getElementsByClassName(`id${id}`)[0].style.textDecoration = 'line-through';
            arr.push({ name });
        }
        console.log(arr);
    }
    
    const handleSubmit = (event,task) => {
        event.preventDefault();
            settasks([...tasks, { name: task, id: Math.floor(Math.random() * 10000) }])
    }
    const completedtask = () => {
        setshowcompletedtask(true);
        console.log(arr);
    }
    
    const list = tasks.map((i, index) => 
        <div className={`id${i.id}`} onClick={()=>strikeout(i.id,index,i.name)} >{i.name}</div>
    )
    const list2 = arr.map((i, index) => 
        <div  >{i.name}</div>
    )
    return (
        <Container>
            <Taskform handleSubmit={handleSubmit} />
            <Row>
            <div>todo list</div>
                {list}
                {list2}
            </Row>
            <Button variant="primary" >Remove Completed Task</Button>
            <div onClick={completedtask} >
                <Button variant="primary" type="submit" >Completed Task</Button>
                </div>
            
        
            
        </Container>
    );
}

export default Tasklist;
