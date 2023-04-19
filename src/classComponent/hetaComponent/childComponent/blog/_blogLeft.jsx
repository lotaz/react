import React, { Component } from 'react';

class BlogLeft extends Component {
    render() {
        return (
            <div className='blog-left'>
                <img src='https://vtcoder-html3.surge.sh/img/slider.png' alt='123'/>
                <div className='blog-left-group'>
                    <h3>HetaChain - Blockchain Platform for The Smart Economy</h3>
                    <p>HetaChain - The Blockchain 3.0 platform has brought this technology beyond the <br /> financial-economic arena, as a perfect application for essential areas of human life <br /> such as health, education, the arts, …</p>
                    <div>
                    <button className='blog-left-button'>read more</button>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default BlogLeft;