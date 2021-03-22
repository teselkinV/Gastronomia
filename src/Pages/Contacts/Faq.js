import React from 'react';
import Accordion from './Accordion';

function Faq() {
    return (
        <div className='faq'>
            <h2>FAQ</h2>
            <Accordion
                title="What is your return policy?"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Accordion
                title="How do I track my order?"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Accordion
                title="Can I purchase items again?"
                content="
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                "
            />
        </div>
    );
}

export default Faq;