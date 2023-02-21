function Button(props) {
    console.log(props)
    return <button
        onClick={props.click}>{props.label}</button>
}
export default Button 
