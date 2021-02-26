import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:35 PM"
                    image={faker.image.image()}
                    comment="Awesome post!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Axel"
                    timeAgo="Today at 2:00 AM"
                    image={faker.image.image()}
                    comment="What a splendid post!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 11:00 PM"
                    image={faker.image.image()}
                    comment="Thank you!"
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));