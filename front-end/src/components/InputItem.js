import React from "react";
import { useState } from "react";

const InputItem = () => {

    const [description, setDescription] = useState("")

    const onSubmitForm = async event => {
        event.preventDefault()

        try{
            const body = {description}
            const response = await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (error){
            console.error(error)
        }
    }

    return (
        <>
            <h1 className="text-center mt-10">Kaan's Online To-Do List</h1>
            <form className="d-flex mt-5 mx-5" onSubmit={onSubmitForm}>
                <input 
                type="text"
                className="form-control" 
                id="todo-item" 
                name="todo-item" 
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder="Write something..">
                </input>
                <button className="btn btn-success">Add New Item</button>
            </form>
        </>
    )
}

export default InputItem;