import React from 'react'

// stateless functional components
const Header = (props) => (
    <div className="header">
        <h1 className="header__tile">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
)


Header.defaultProps = {
    title: 'Indecision'
}

export default Header