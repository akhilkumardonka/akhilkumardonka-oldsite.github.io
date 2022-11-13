const Skillcard = (props) => {
    return (
        <img className="img-fluid ml-auto mb-4 tech-image border p-1 m-1" src={props.img} title={props.name} alt="" />
    )
}

export default Skillcard;