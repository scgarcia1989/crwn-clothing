import React from 'react';

import './homepage.styles.scss';


import '../../components/directory/directory.component';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage'>
        <h1>Welcome to my Homepage</h1>

        <Directory></Directory>
    </div>
);

export default HomePage;