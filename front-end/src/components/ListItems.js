import React, { useState } from "react";
import { useEffect } from 'react';

import EditItem from "./EditItem";

const ListItems = () => {

    const [items, setItems] = useState([])

    // get all items here
    const getItems = async () => {
        try{
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setItems(jsonData)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getItems()
    },[])
    
    // delete items
    const deleteItem = async id => {
        try{
            const deleteItem = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            setItems(items.filter(item => item.item_id !== id));
        } catch (error) {
            console.error(error)
        }
    }

    return (
        // iteratively list retrieved items here
        <table className="table table-hover mt-5 mx-5">
            <thead>
                <tr>
                <th scope="col">Task</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete </th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.item_id}>
                        <td>{item.description}</td>
                        <td>
                            <EditItem item={item}></EditItem>
                        </td>
                        <td>
                            <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => deleteItem(item.item_id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default ListItems;