import React from 'react';

function Header() {
    return (
        <header style={blueHeader}>
            <h1>My Stuff</h1>
        </header>
    )
}

const blueHeader = {
    textAlign: 'center',
    color: '#ffffff',
    background: '#0000A0',
    padding: '30px'
}


export default Header;