import React from 'react';
import { Text } from '../components/Language/Language';

import Navbar from '../components/Navbar';

function About() {
    return (
        <div>
            <Navbar />
            <h1><Text t="about-us" /></h1>
        </div>
    );
}

export default About;