//6. Dada a lista de usuarios do nosso sistema, manipule o array, 
//para gerar em duas estruturas separadas 
//a coleção de usuários que estão ativos e a coleção de usuários que estão inativos.

const usuarios = [
    { nome: 'Diego', idade: 23, ativo: true },
    { nome: 'Gabriel', idade: 15, ativo: false },
    { nome: 'Lucas', idade: 30, ativo: false },
];
  
function estado(arr){
    const usuariosAtivos = [] 
    const usuariosInativos = []
    arr.map(usuario => {
        if(usuario.ativo === true){
            usuariosAtivos.push(usuario)
        } else {
            usuariosInativos.push(usuario)
        }
    })

    return(console.log(usuariosAtivos,'\n',usuariosInativos))

}

estado(usuarios)
