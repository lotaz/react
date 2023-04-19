import React, { Component } from 'react';
import './Ourteam.scss'
class Ourteam extends Component {
    render() {
        const arrayBoard = [
            {
                id: 1,
                image_1: 'https://vtcoder-html3.surge.sh/img/user.png',
                image_2: 'https://vtcoder-html3.surge.sh/img/user.png',
                name: 'Mr. Sultan Ali Lootah',
                title: 'Founder and CEO of MLG Blockchain, anenterprise blockchain and ICO consulting and development firm.',
                icon: 'https://vtcoder-html3.surge.sh/img/user.png'
            },
            {
                id: 2,
                image_1: 'https://vtcoder-html3.surge.sh/img/user.png',
                image_2: 'https://vtcoder-html3.surge.sh/img/user.png',
                name: 'Mr. Sultan Ali Lootah',
                title: 'Founder and CEO of MLG Blockchain, anenterprise blockchain and ICO consulting and development firm.',
                icon: 'https://vtcoder-html3.surge.sh/img/user.png'
            },
            {
                id: 3,
                image_1: 'https://vtcoder-html3.surge.sh/img/user.png',
                image_2: 'https://vtcoder-html3.surge.sh/img/user.png',
                name: 'Mr. Sultan Ali Lootah',
                title: 'Founder and CEO of MLG Blockchain, anenterprise blockchain and ICO consulting and development firm.',
                icon: 'https://vtcoder-html3.surge.sh/img/user.png'
            },
            {
                id: 4,
                image_1: 'https://vtcoder-html3.surge.sh/img/user.png',
                image_2: '',
                name: 'Mr. Sultan Ali Lootah',
                title: 'Founder and CEO of MLG Blockchain, anenterprise blockchain and ICO consulting and development firm.',
                icon: 'https://vtcoder-html3.surge.sh/img/user.png'
            },
            {
                id: 5,
                image_1: 'https://vtcoder-html3.surge.sh/img/user.png',
                image_2: '',
                name: 'Mr. Sultan Ali Lootah',
                title: 'Founder and CEO of MLG Blockchain, anenterprise blockchain and ICO consulting and development firm.',
                icon: 'https://vtcoder-html3.surge.sh/img/user.png'
            },
            {
                id: 6,
                image_1: 'https://vtcoder-html3.surge.sh/img/user.png',
                image_2: '',
                name: 'Mr. Sultan Ali Lootah',
                title: 'Founder and CEO of MLG Blockchain, anenterprise blockchain and ICO consulting and development firm.',
                icon: 'https://vtcoder-html3.surge.sh/img/user.png'
            }
        ]
        const projectTeam = [
            { id: 1, name: 'Mr. Sultan Ali Lootah', title: 'Co-founder, Chairman & CEO', image: 'https://vtcoder-html3.surge.sh/img/user.png', icon_1: 'https://vtcoder-html3.surge.sh/img/user.png', icon_2: '', icon_3: '' },
            { id: 2, name: 'Mr. Abdulla Ali Lootah', title: 'Co-founder', image: 'https://vtcoder-html3.surge.sh/img/user.png', icon_1: 'https://vtcoder-html3.surge.sh/img/user.png', icon_2: '', icon_3: '' },
            { id: 3, name: 'Mr. Mohammad Ahli', title: 'CSO, Co-founder', image: 'https://vtcoder-html3.surge.sh/img/user.png', icon_1: 'https://vtcoder-html3.surge.sh/img/user.png', icon_2: 'https://vtcoder-html3.surge.sh/img/user.png', icon_3: '' },
            { id: 4, name: 'Mr. Rajesh Gunani', title: 'Co-founder', image: 'https://vtcoder-html3.surge.sh/img/user.png', icon_1: 'https://vtcoder-html3.surge.sh/img/user.png', icon_2: '', icon_3: '' },
            { id: 5, name: 'Mr. Nagesh Ananth Prabhu', title: 'Co-founder & CTO', image: 'https://vtcoder-html3.surge.sh/img/user.png', icon_1: 'https://vtcoder-html3.surge.sh/img/user.png', icon_2: 'https://vtcoder-html3.surge.sh/img/user.png', icon_3: 'https://vtcoder-html3.surge.sh/img/user.png' },
            { id: 6, name: 'Mr. Ali Juma Alajme', title: 'CFO, Co-founder', image: 'https://vtcoder-html3.surge.sh/img/user.png', icon_1: 'https://vtcoder-html3.surge.sh/img/user.png', icon_2: 'https://vtcoder-html3.surge.sh/img/user.png', icon_3: '' }
        ]
        const renderHtml = () => {
            if (projectTeam) {
                return projectTeam.map((item, index) => {
                    return (
                        <div className='team-content' key={index}>
                            <img className='team-image' src={item.image} alt={item.name} width={'120px'} />
                            <p className='team-name'>{item.name}</p>
                            <p className='team-title'>{item.title}</p>
                            <div>
                                <img className='team-icon' src={item.icon_1} alt={item.title} width={'30px'} />
                                {item?.icon_2 === '' ? '' : < img
                                    className='team-icon2'
                                    src={item.icon_2}
                                    alt={item.name}
                                    width={"120px"} />
                                }

                                {item?.icon_3 === '' ? '' : < img
                                    className='team-icon2'
                                    src={item.icon_3}
                                    alt={item.name}
                                    width={"120px"} />
                                }
                            </div>


                        </div>
                    )
                })
            }
        }
        const renderHtml_2 = () => {
            if (arrayBoard) {
                return arrayBoard.map((item, index) => {
                    return (
                        <div className='team-content' key={index}>
                            <img className='team-image' src={item.image_1} alt={item.name} width={'120px'} />
                            {item?.image_2 === '' ? '' : < img
                                className='team-image'
                                src={item.image_2}
                                alt={item.name}
                                width={"120px"} />
                            }
                            <p className='team-name'>{item.name}</p>
                            <p className='team-title'>{item.title}</p>
                            <img className='team-icon' src={item.icon} alt={item.title} width={'30px'} />
                        </div>
                    )
                })
            }
        }
        return (

            <div className='team'>
                <div className='team-head'>
                <h1>OUR <span>TEAM</span></h1>
                <p className='team-scripts'>The Heta Team combines a passion for esports, industry experise & proven <br />  record  in finance, development, <br /> marketing & licensing.</p>
                <h3>THE <span>PROJECT'S</span> TEAM</h3>
                </div>
                
                <div className='team-group'>
                    {renderHtml()}
                    {renderHtml_2()}
                </div>
            </div>
        );
    }
}

export default Ourteam;