import { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser=(props)=>{

    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState('');

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
        {
            return;
        }
        if(+enteredAge<1)
        {
            return;
        }
       props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    }

    const errorHandler=()=>{
        setError(null);
    }


    
    return(
        <div>
            {
                error && (
                    <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}/>
                ) }
        <Card className={classes.input}>

            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}/>

                <label htmlFor="age">Age</label>
                <input type="age" id="age" value={enteredAge} onChange={ageChangeHandler}/>

                <Button type='submit'>Add User</Button>

            </form>
        </Card>
        </div>
    )
}
export default AddUser;