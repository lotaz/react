import React, { Component } from 'react';
import BlogLeft from './_blogLeft';
import './Blog.scss'
import BlogRight from './_blogRight';
class Blog extends Component {
    render() {
        return (
            <div className='blog'>
                <h1>Hetachain’s Blog</h1>
                <div className='blog-grid'>
                    <BlogLeft />
                    <BlogRight />
                </div>
            </div>
        );
    }
}

export default Blog;