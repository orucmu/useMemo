import React from 'react'

function Header({ increment }) {
    console.log("Header component was re-rendered!");
    return (
        <div>
            Header
            <br /><br />
            <button onClick={increment}> Click </button>

        </div>
    )
}

export default React.memo(Header)