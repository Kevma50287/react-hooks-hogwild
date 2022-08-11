import React from 'react'

export default function Filter({ isOn, setIsOn, setSort }) {

    function handleClick(e) {
        const onOff = !isOn
        setIsOn(onOff)
    }

    function handleSort(e){
        setSort(e.target.value)
    }

    return (
        <div>
            <button onClick={handleClick}>{isOn ? 'Filter: Greased' : 'Filter: None'}</button>
            <div>
                <label for='sort'>Sort By:</label>
                <select id='sort' name='sort' onChange={handleSort}>
                    <option value='None'>All</option>
                    <option value='Name'>Name</option>
                    <option value='Weight'>Weight</option>
                </select>
            </div>
        </div>
    )
}
