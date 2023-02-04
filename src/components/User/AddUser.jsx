import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from "./AddUser.module.css";


const AddUser = (props) => {
    const [inputs,setInputs] = useState({
        username : "",
        age : ""
    });
    const [error,setError] = useState(false);
    const inputChangeHandler = (e) => {
        setInputs({...inputs,[e.target.name] : e.target.value});
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(inputs.username.trim().length === 0 || inputs.age.trim().length === 0){
            setError({
                title : "Invalid input",
                message : "Please fill input"
            })
            return
        }
        if(inputs.age < 1) {
            setError({
                title: "Invalid age",
                message : "Please write greater number than zero (num > 0)"
            })
            return
        }
        props.onAddUser(inputs.username,inputs.age);
    }
    const confirmHandler = () => {
        setError(false);
    }
    return (
        <>
            {error && <ErrorModal onConfirm = {confirmHandler} title = {error.title} message = {error.message} />}
            <Card className = {classes.input}>
                <form onSubmit = {submitHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={inputs.username} onChange={inputChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" name="age" id="age" value={inputs.age} onChange = {inputChangeHandler} />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser