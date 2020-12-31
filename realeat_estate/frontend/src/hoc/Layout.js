import React from 'react';
import NavBar from '../components/NavBar';

const layout = (props) => (
    <div>
        <NavBar />
        {props.children}
    </div>
);

export default layout;