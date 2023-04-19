import React, { Component } from 'react';
import './Feature.scss'
class Feature extends Component {
    render() {
        const arraytitle = [
            { id: 1, title: 'E-Wallets & CryptoWallets', icon: 'https://vtcoder-html3.surge.sh/img/prob-1.png' },
            { id: 2, title: 'Systems Of International Money Transfers', icon: 'https://vtcoder-html3.surge.sh/img/prob-1.png' },
            { id: 3, title: 'E-Merchants', icon: 'https://vtcoder-html3.surge.sh/img/prob-1.png' },
            { id: 4, title: 'Exchanges', icon: 'https://vtcoder-html3.surge.sh/img/prob-1.png' },
            { id: 5, title: 'Fintech Company', icon: 'https://vtcoder-html3.surge.sh/img/prob-1.png' },
            { id: 6, title: 'Secure network', icon: 'https://vtcoder-html3.surge.sh/img/prob-1.png' },
            { id: 7, title: 'P2P Platform & Aggregators', icon: 'https://vtcoder-html3.surge.sh/img/prob-1.png' },
            { id: 8, title: 'Global Connection', icon: 'https://vtcoder-html3.surge.sh/img/prob-1.png' }
        ]
        const renderHtml = () => {
            if (arraytitle) {
                return arraytitle.map((item, index) => {
                    return (
                        <div className='feature-content' key={index}>
                            <img className='feature-image' src={item.icon} alt={item.title} width={'200px'} height={'200px'} />
                            <p className='feature-title'>{item.title}</p>
                        </div>
                    )
                })
            }
        }
        return (
            <div className='feature'>
                <h1 className='feature-head'>FEATURES</h1>
                <div>
                    <div className='feature-group'>
                        {renderHtml()}
                    </div>
                </div>
            </div>


        );
    }
}

export default Feature;