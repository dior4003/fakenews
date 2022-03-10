

export default function MyButton(props){

    return(
        <button {...props}>{props.children}</button>
    )
}