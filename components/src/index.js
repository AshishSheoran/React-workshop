import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:35 PM"
                image={faker.image.image()}
                comment="Awesome post!"
            />

            <CommentDetail
                author="Axel"
                timeAgo="Today at 2:00 AM"
                image={faker.image.image()}
                comment="What a splendid post!"
            />

            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 11:00 PM"
                image={faker.image.image()}
                comment="Thank you!"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));