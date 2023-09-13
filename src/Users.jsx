import { useEffect, useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setUsers(data))
    }, [])

    const usersStyle = {
        border: '2px solid green',
        margin:'15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return(
        <div style={usersStyle}>
            <h3>Users: {users.length}</h3>

        </div>
    )
}


/**
 * 1. declare a state to hold the data
 * 2.useEffect with call back and dependency array
 * 3. use fetch to load data
 */