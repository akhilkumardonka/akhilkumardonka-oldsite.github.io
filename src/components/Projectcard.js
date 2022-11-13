
const Projectcard = (props) => {
    
    return (
        <div className="projectcard">
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mb-4 display-6 lh-1 fw-bold text-white">{props.title}</h3>
                    <p className="text-white">{props.about}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Projectcard;