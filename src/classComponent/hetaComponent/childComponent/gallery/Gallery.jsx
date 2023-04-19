import React, { Component } from 'react';
import './Gallery.scss'
class Gallery extends Component {
    render() {
        const array = [
            { id: 1, img: 'https://vtcoder-html3.surge.sh/img/slider.png' },
            { id: 2, img: 'https://vtcoder-html3.surge.sh/img/slider.png' },
            { id: 3, img: 'https://vtcoder-html3.surge.sh/img/slider.png' },
            { id: 4, img: 'https://vtcoder-html3.surge.sh/img/slider.png' },
            { id: 5, img: 'https://vtcoder-html3.surge.sh/img/slider.png' }
        ]
        const renderHtml = () => {
           return array?.map((item, index) => {
                return (
                    <div className='gallery-group-icon' key={index}>
                        <img src={item.img} width={'200px'}/>
                    </div>
                )
            })
        }
        return (
            <div className='gallery'>
                <h1>Gallery</h1>
                <div className='gallery-image'>
                    <img src='https://vtcoder-html3.surge.sh/img/slider.png' alt='123' />
                    <img src='https://vtcoder-html3.surge.sh/img/slider.png' alt='123' />
                </div>
                <div className='gallery-group'>
                    {renderHtml()}
                </div>

            </div>
        );
    }
}

export default Gallery;