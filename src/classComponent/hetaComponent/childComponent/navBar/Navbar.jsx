import React, { Component } from 'react';
import './Navbar.scss'
class Navbar extends Component {
    render() {
        const img= 'https://vtcoder-html3.surge.sh/img/logo.png'
        return (
            <div className="navbar">
            <div className="navbar-image">
                <img src={img} alt='123'/>
            </div>
            <div className="navbar-functions">
                <ul className='navbar-ul'>
                    <li className='navbar-li'>
                        <a className='navbar-home'>home</a>
                    </li>
                    <li className='navbar-li'>
                        <a>introduction</a>
                    </li>
                    <li className='navbar-li'>
                        <a>home</a>
                    </li>
                    <li className='navbar-li'>
                        <a>features</a>
                    </li>
                    <li className='navbar-li'>
                        <a>team</a>
                    </li>
                    <li className='navbar-li'>
                        <a>news</a>
                    </li>
                    <li className='navbar-li'>
                        <a>events</a>
                    </li>
                    <li className='navbar-li'   >
                        <a>blogs</a>
                    </li>
                </ul>
                <button className='navbar-button'>register</button>
                <button className='navbar-button'>login</button>
            </div>
            </div>
        );
    }
}

export default Navbar;