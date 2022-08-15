
function Square(props:any) {
    return <button className="border border-1 border-sky-500 w-20 h-20 text-center" onClick={props.onClick}>{props.value}</button> 
}

export default Square