import { FC } from "react"
import "./style.css"


const Container:FC = ({children}) => {
  return(
    <section className="quadrado">
      {children}
    </section>
  )

}

export default Container