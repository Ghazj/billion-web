function Input(props) {
    return (
        <div className="inputGroup">
            <label htmlFor={props.id}>{props.label}</label>
            <input onChange={props.handleChange} type={props.type} id={props.id} placeholder={props.placeholder} />
        </div>
    )
}

export default Input;