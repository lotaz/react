import React, { Component } from 'react';

class Detail extends Component {
    render() {
        const img = 'https://vtcoder-html3.surge.sh/img/borderBefore.png'
        return (
            <div className='detail'>
                <div className='detail-img'>
                    <img src={img} alt='111' />
                </div>
                <div className='detail-button'>
                    <a>Click to see detail</a>
                </div>
            </div>
        );
    }
}

export default Detail;