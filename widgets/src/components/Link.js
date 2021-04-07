import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        // To open any link in new window by pressing command/ctrl
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a
            onClick={onClick}
            className={className}
            href={href}
            children={children}
        ></a>
    );
};

export default Link;
