const desafio1asRosasNaoFalam = async () => {

    const geraIntervaloAleatório = () => Math.floor(Math.random() * 3 * 1000);
    
    
    const queixoMeAsRosas = () => {
        return new Promise(res =>{
            setTimeout(() => {
                console.log('Queixo-me às rosas');
                res()
            }, geraIntervaloAleatório());
        })};
      
        const masQueBobagem = () => {
            return new Promise(res => {
                setTimeout(() => {
                    console.log('Mas que bobagem');
                    res()
                }, geraIntervaloAleatório())
    
            })};
      
        const asRosasNaoFalam = () => {
         return new Promise(res =>{
            setTimeout(() => {
                console.log('As rosas não falam');
                res()
              }, geraIntervaloAleatório());
         })
         
        };
      
        const simplesmenteAsRosasExalam = () => {
         return new Promise(res => {
            setTimeout(() => {
                console.log('Simplesmente as rosas exalam');
                res()
              }, geraIntervaloAleatório());
         })   
         
        };
      
        const oPerfumeQueRoubamDeTi = () => {
           return new Promise(res =>{
            setTimeout(() => {
                console.log('O perfume que roubam de ti, ai');
                res()
            }, geraIntervaloAleatório());
           }) 
          
        };
  
    await queixoMeAsRosas()
    await masQueBobagem()
    await asRosasNaoFalam()
    await simplesmenteAsRosasExalam()
    await oPerfumeQueRoubamDeTi()
   
   
}

desafio1asRosasNaoFalam()
 