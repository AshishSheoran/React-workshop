import React from 'react';
import Accordian from './components/Accordian';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JavaScript framework.',
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers.',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating component.',
    },
];

const App = () => {
    return (
        <div>
            <Accordian items={items} />
        </div>
    );
};

export default App;
