import React,{useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
export default function Taskform(props) {
    
    const [task, settask] = useState('');
    const [showerror, setshowerror] = useState('');
    const handleChange=event=>{
        settask(event.target.value);
    }
    const refreshinput=()=>{
        settask('');
    }
    return (
    
        <Container>
            <Form onSubmit={(event) => {
                if (task.length < 5){
                    event.preventDefault();
                    setshowerror("Please enter task with more than 5 leters.")
                }
                else {
                    props.handleSubmit(event, task);
                    refreshinput();
                    setshowerror("")
                    
                    }
                
            }
            }>
                    <Form.Group>
                        <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="enter new task" value={task} onChange={handleChange} />
                    
                    <Form.Text>{ showerror}</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" >Done</Button>
                </Form>
        </Container>
    );
}
