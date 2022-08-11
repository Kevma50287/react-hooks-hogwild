import React, { useState } from 'react'

export default function Form({setHogs}) {
    const [change, setChange] = useState({
        name: '',
        specialty: '',
        greased: false,
        'highest medal achieved': '',
        image: ''
    })

    function handleChange(e) {
        const newObj = {}
        if (e.target.name !== 'medal') {
            newObj[e.target.name] = e.target.value
        } else {
            newObj['highest medal achieved'] = e.target.value
        }
        setChange({ ...change, ...newObj })
    }

    console.log(change)

    function doStuff(e) {
        e.preventDefault()
        setHogs(change)
    }
    return (
        <div>
            <h1>Pig Submission Form</h1>
            <form id='hogAdd' name='hogAdd' onSubmit={doStuff}>
                <div>
                    <label htmlFor='name'>Please Enter Pig Name:</label>
                    <input type="text" name='name' id='name' onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='specialty'>Please Enter Specialty:</label>
                    <input type="text" name='specialty' id='specialty' onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='greased'>Please Enter Greased:</label>
                    <input type="text" name='greased' id='greased' onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='medal'>Please Enter Medal:</label>
                    <input type="text" name='medal' id='medal' onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='image'>Please Enter Image URL:</label>
                    <input type="text" name='image' id='image' onChange={handleChange}></input>
                </div>
                <button type='Submit'>Submit Form</button>
            </form>

        </div>
    )
}
