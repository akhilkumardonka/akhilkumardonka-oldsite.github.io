import React from 'react';

const Workcolab = (props) => {
    return (
        <div className="col-md-6">
            <div className="h-100 p-5 bg-dark rounded-3">
                <h2 className="text-white">{props.title}</h2>
                <p className="text-white">{props.content}</p>
            </div>
        </div>
    )
}

export default Workcolab;