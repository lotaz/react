    import React, { Component } from 'react';
import './News.scss'
class News extends Component {
    render() {
        const isArray = Array.from(Array(15).keys())
        const renderHtml = () => {
            if (isArray) {
                return isArray.map((index) => {
                    return ( 
                        <div key={index} className='news-image'>
                            <img src="https://vtcoder-html3.surge.sh/img/news1.png" alt="123" />
                        </div>
                    )
                })
            }
        }
        return (
            <div className='news'>
                {renderHtml()}
            </div>
        );
    }
}

export default News;