import React from 'react'


const Part = ({ part }) => {
    const { name, exercises, id } = part
    return (
        <div>
            <p key={id}>{name} {exercises}</p>
        </div>
    )
}

export default Part
