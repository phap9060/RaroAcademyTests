
import "./style.css"
interface Iprops  {
    name:string
    reset:()=>void
}

const Button = ({name, reset}:Iprops) => {
    return(
        
        <button onClick={reset} type="button">{name}</button>
        
    )
}

export default Button