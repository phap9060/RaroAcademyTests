import './style.css'
type props = {
    foto : string,
    nome : string,
    profissao : string
}

export default function Card({foto,nome,profissao}: props){
    return (
        <div className='contact'>
            <img src={foto} alt="" />
            <div>
                <div>
                    <h2 >{nome}</h2>
                    <h4 >{profissao}</h4>
                </div>
                <div>
                    <button>call</button>
                    <button>Send email</button>
                </div>
            </div>
        </div>
      
    )
}