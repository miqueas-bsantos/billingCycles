import React from 'react'
import Navbar from './navbar'

export default props => (
    <hearder className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini">
                <b>My</b>M
            </span>
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b> My</b> Money
            </span>
        </a>
        <Navbar />
    </hearder>
)