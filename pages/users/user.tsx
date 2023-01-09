import React from 'react';
import ClassComponent from 'components/ClassComponent';

const user = (
    <div className="card-body">
        <ClassComponent color={"yellow"} />
    </div>
);

const FirstUser = () => {
    return user;
};

export default FirstUser;
