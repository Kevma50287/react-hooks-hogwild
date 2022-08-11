import React, { useState } from 'react'

export default function Tile({ hog: {name, image, specialty, weight, greased, "highest medal achieved": medal} }) {
    const [display, setDisplay] = useState(false)
    function handleDisplay() {
        const A = !display
        setDisplay(A)
    }

    return (
        <div onClick={handleDisplay}>
            <h1>{name}</h1>
            <img src={image} alt='Pig' />
            {display &&
                <>
                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}</p>
                    <p>Greased: {`${greased}`}</p>
                    <p>Highest Medal: {medal}</p>
                </>
            }
        </div>
    )
}
