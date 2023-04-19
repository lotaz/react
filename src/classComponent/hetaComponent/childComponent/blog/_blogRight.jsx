import React, { Component } from 'react';

class BlogRight extends Component {
    render() {
        const array = [
            { id: 1, title: 'Relam investment launches “Relam Star” program' },
            { id: 2, title: 'Hetachain & T-hub enters China' }
        ]
        const renderHtml = () => {
            // ? có ý nghĩa xét array hay obj có dữ liệu
            return array?.map((item, index) => {
                return(
                    <div key={index} className='blog-right-group'>
                        <div className='blog-right-image'>
                         <img src='https://vtcoder-html3.surge.sh/img/slider.png' alt='123'/>
                        </div>
                        <div className='blog-right-content'>
                            <h4>{item?.title}</h4>
                            <p>Relam investment launches “Relam Star” program to keep pace with world technologies changes</p>
                            <button>read more</button>
                        </div>
                    </div>
                )
            })
        }   
        return (
            <div className='blog-right'>
                {renderHtml()}
            </div>
        );
    }
}

export default BlogRight;