import React, { useState } from 'react';
// import Accordian from './components/Accordian';
//import Search from "./components/Search";
import Dropdown from './components/Dropdown';

// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a front end JavaScript framework.',
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is a favourite JS library among engineers.',
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating component.',
//     },
// ];

const options = [
    {
        label: 'The Color Red',
        value: 'red',
    },
    {
        label: 'The Color Green',
        value: 'green',
    },
    {
        label: 'A Shade of Blue',
        value: 'blue',
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* <Accordian items={items} /> */}
            {/* <Search /> */}
            <button onClick={() => setShowDropdown(!showDropdown)}>
                Toggle Dropdown
            </button>
            {showDropdown ? (
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            ) : null}
        </div>
    );
};

export default App;
