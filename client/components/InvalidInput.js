import React from 'react';

const InvalidInput = (props) => {
    return (
        <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
        >
            {props.children}
        </div>
    );
};

export default InvalidInput;
