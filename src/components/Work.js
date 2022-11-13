import React from 'react';
function Work({ position, company, location, type, duration }){
    return (
        <div className="work-item">
            <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                    <h6 className="mb-0 text-black">{position}</h6>
                    <p className="mb-0 work-item-pink">{company}</p>
                    <p className="mb-0 opacity-50">{type}</p>
                </div>
                <small className="text-nowrap">{duration}</small>
                </div>
            </div>
        </div>
    );
}

export default Work;