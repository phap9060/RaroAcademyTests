const desafio1asRosasNaoFalam = () => {

    const geraIntervaloAleatório = () => Math.floor(Math.random() * 3 * 1000);
    
    // métodos de versos. Estes métodos deverão ser modificados.
    const queixoMeAsRosas = () => {
      setTimeout(() => {
        console.log('Queixo-me às rosas');
        masQueBobagem()
      }, geraIntervaloAleatório());
    };
  
    const masQueBobagem = () => {
      setTimeout(() => {
        console.log('Mas que bobagem');
        asRosasNaoFalam()
      }, geraIntervaloAleatório());
    };
  
    const asRosasNaoFalam = () => {
      setTimeout(() => {
        console.log('As rosas não falam');
        simplesmenteAsRosasExalam()
      }, geraIntervaloAleatório());
    };
  
    const simplesmenteAsRosasExalam = () => {
      setTimeout(() => {
        console.log('Simplesmente as rosas exalam');
        oPerfumeQueRoubamDeTi()
      }, geraIntervaloAleatório());
    };
  
    const oPerfumeQueRoubamDeTi = () => {
      setTimeout(() => {
        console.log('O perfume que roubam de ti, ai');
      }, geraIntervaloAleatório());
    };
  
  
    queixoMeAsRosas(() =>
            masQueBobagem(() =>
                asRosasNaoFalam(()=>
                    simplesmenteAsRosasExalam(()=>
                        oPerfumeQueRoubamDeTi()
                )

            )  
        )
    )
   
}

desafio1asRosasNaoFalam()
 