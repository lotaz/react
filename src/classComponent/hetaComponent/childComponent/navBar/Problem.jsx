import React, { Component } from 'react';

class Problem extends Component {
    render() {
        return (
            <div className='problem'>
                <div className='problem-title'>
                    PROBLEMS
                </div>
                <div className='problem-option'>
                    <div className='option'>
                        <img src='https://vtcoder-html3.surge.sh/img/prob-1.png'/>
                        <p className='option-title'>Transaction Speed</p>
                        <p className='option-script'>Slow, impractical for retail transactions. <br />     The speed of current crypto transactions is <br /> very slow, difficult to meet user needs</p>
                    </div>
                    <div className='option'>
                        <img src='https://vtcoder-html3.surge.sh/img/prob-2.png'/>
                        <p className='option-title'>Secure</p>
                        <p className='option-script'>Slow, impractical for retail transactions. <br />     The speed of current crypto transactions is <br /> very slow, difficult to meet user needs</p>
                    </div>
                    <div className='option'>
                        <img src='https://vtcoder-html3.surge.sh/img/prob-3.png'/>
                        <p className='option-title'>Scalabilty</p>
                        <p className='option-script'>Slow, impractical for retail transactions. <br />     The speed of current crypto transactions is <br /> very slow, difficult to meet user needs</p>
                    </div>
                </div>
                <div className='problem-protocol'>
                    <div className='protocol-image'>
                    <img src='https://vtcoder-html3.surge.sh/img/prob-4.png'/>
                    </div>
                  <div className='problem-script'>
                    <h1>Heta Protocol - A Multichan <br /> Platfotm</h1>
                    <p>HetaChain - The Blockchain 3.0 platform has brought this technology beyond <br /> the financial-economic arena, as a perfect application for essential areas of <br /> human life such as health, education, the arts, …</p>
                    <p className='problem-muitichain'>A Muitichain Platform HetaChain is a multi-chain blockchain network having <br /> both Public and Private Chain capabilities for an effective business and <br /> governance system transactions built for industry-grade computational <br /> requirements which allow the efficient handling of commercial applications <br /> and economic events.</p>
                  </div>
                </div>
            </div>
        );
    }
}

export default Problem;