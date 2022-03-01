const desafio1asRosasNaoFalam = async () => {

    const geraIntervaloAleatório = () => Math.floor(Math.random() * 3 * 1000);

    // métodos de versos. Estes métodos deverão ser modificados.
    const queixoMeAsRosas = () => {
      return new Promise((res) => {
        setTimeout(() => {
          console.log("Queixo-me às rosas");
          res();
        }, geraIntervaloAleatório());
      });
    };
  
    const masQueBobagem = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(console.log("Mas que bobagem"));
        }, geraIntervaloAleatório());
      });
    };
  
    const asRosasNaoFalam = () => {
      return new Promise((res) => {
        setTimeout(() => {
          res(console.log("As rosas não falam"));
        }, geraIntervaloAleatório());
      });
    };
  
    const simplesmenteAsRosasExalam = () => {
      return new Promise((res) => {
        setTimeout(() => {
          res(console.log("Simplesmente as rosas exalam"));
        }, geraIntervaloAleatório());
      });
    };
  
    const oPerfumeQueRoubamDeTi = () => {
      return new Promise((res) => {
        setTimeout(() => {
          res(console.log("O perfume que roubam de ti, ai"));
        }, geraIntervaloAleatório());
      });
    };
  
    await queixoMeAsRosas()
    await masQueBobagem()
    await asRosasNaoFalam()
    await simplesmenteAsRosasExalam()
    await oPerfumeQueRoubamDeTi()
   
   
}

desafio1asRosasNaoFalam()
 