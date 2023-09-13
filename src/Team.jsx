import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam)

    }

    const handleRemove = () =>{
        const newTeam = team -1;
        setTeam(newTeam);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin:'15px',
        padding: '15px',
        borderRadius: '15px'
    }
    const btnStyle ={
        backgroundColor: 'red',
        marginRight: "10px"
    }
    const btnStyle2 ={
        backgroundColor: 'rebeccapurple',
    }
    return (
        <div style={teamStyle}>
            <h3>Player: {team} </h3>
            <button style={btnStyle} onClick={handleAdd}>Add</button>
            <button style={btnStyle2} onClick={handleRemove}>Remove</button>
        </div>
    )
}