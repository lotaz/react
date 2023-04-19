import React, { Component } from 'react';

class Platform extends Component {
    render() {
        const img='https://vtcoder-html3.surge.sh/img/bg-header.png'
        return (
            <div className='platform'>
                <div className='platform-script'>
               <span className='platform-fscipt'> HetaChain Platform</span>
                <br />
                Open Blockchain Financial
                <br />
                Platform for Fintech and
                <br />
                Crypto Business
                <div className='newstage'>
                New stage of global
                <br />
                payment evolution
                </div>
               
                     </div>
                <div className='platform-image'>
                    <img src={img} alt='123'/>
                </div>
            </div>
        );
    }
}

export default Platform;