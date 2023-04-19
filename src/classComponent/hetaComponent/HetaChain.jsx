import React, { Component } from 'react';
import Detail from './childComponent/platForm/Detail';
import Navbar from './childComponent/navBar/Navbar';
import Platform from './childComponent/platForm/Platform';
import Problem from './childComponent/navBar/Problem';
import Feature from './childComponent/feature/Feature';
import Ourteam from './childComponent/ourTeam/Ourteam';
import News from './childComponent/news/News';
import Blog from './childComponent/blog/Blog';
import Gallery from './childComponent/gallery/Gallery';
import Partners from './childComponent/partners/Partners';

class HetaChain extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Platform />
                <Detail />
                <Problem />
                <Feature />
                <Ourteam />
                <News />
                <Blog />
                <Gallery />
                <Partners />
            </div>
        );
    }
}

export default HetaChain;