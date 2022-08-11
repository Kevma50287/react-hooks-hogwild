import React, { useState } from 'react'

export default function Tile({ hog: {name, image, specialty, weight, greased, "highest medal achieved": medal} }) {
    const [display, setDisplay] = useState(false)
    const [show, setShow] = useState(true)
    function handleDisplay(e) {
        const A = !display
        setDisplay(A)
    }
    function handleShow(){
        const negshow = !show
        setShow(negshow)
    }


    return (
        <div>
            <h1 onClick={handleShow}>{name}</h1>
            <img src={image} alt='Pig' onClick={handleDisplay} style={{display: show ? "block" : "none"}} />
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
