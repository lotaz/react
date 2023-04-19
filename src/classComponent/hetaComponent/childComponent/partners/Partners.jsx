import React, { Component } from 'react';
import './Partners.scss'
export default class Partners extends Component {
    render() {
        const array = Array.from(Array(12).keys())
        const renderHtml = () => {
            if (array) {
                return array.map((index) => {
                    return(
                        <div key={index} className='partners-image'>
                            <img src="https://vtcoder-html3.surge.sh/img/partners.png"  alt="123" />
                            
                        </div>
                    )
                })
            }
        }
        return (
            <div>
                <h1>OUR PARTNERS</h1>
                 <div className='partners'>
                
                {renderHtml()}
            </div>
            </div>
           
        )
    }
}
