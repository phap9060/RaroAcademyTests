
import "./style.css"
interface Iprops  {
    name:string
    reset:any
}

const Button = ({name, reset}:Iprops) => {
    return(
        
        <button onClick={reset} type="button">{name}</button>
        
    )
}

export default Button