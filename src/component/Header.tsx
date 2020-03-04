import React from 'react'

interface HeaderProps {
    text: string
}

const Header: React.FC<HeaderProps> = ({text}) => {
    return (
        <header>
            <h2>{text}</h2>
        </header>
    )
}

export default Header
