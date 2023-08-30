import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Expertis.css'
import node from '../../assets/images/node.png'
import react from '../../assets/images/react.png'
import angular from '../../assets/images/angular.png'
import tailwind from '../../assets/images/tailwind.png'
import dotnet from '../../assets/images/dotnet.png'
import csharp from '../../assets/images/csharp.png'
import java from '../../assets/images/java.png'


const Expertis = () => {
    return (
        <React.Fragment>
            <div className='logos max-w-maxWidth mx-auto py-8'>
                <h2 className='text-[#00c7d4] text-center mb-8'>Our Expertise</h2>
                <div className='logos-slide'>
                    <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center border" />
                    <img alt="node" src={node} className="h-20" />
                    <img alt="dotnet" src={dotnet} className="h-20" />
                    <img alt="react" src={react} className="h-20" />
                    <img alt="java" src={java} className="h-20" />
                    <img alt="angular" src={angular} className="h-20" />
                    <img alt="tailwind" src={tailwind} className="h-20" />
                    <img alt="csharp" src={csharp} className="h-20" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Expertis