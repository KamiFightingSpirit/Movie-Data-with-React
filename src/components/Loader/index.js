import React from 'react';
import loaderSrc from '../../assets/loader.gif'

const Loader = props => (
    <div>
        <img 
            style={{ width: 90}}
            alt="Loader Icon" 
            src={loaderSrc} />
    </div>
);

export default Loader;