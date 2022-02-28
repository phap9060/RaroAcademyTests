const despertador = (intervaloEmSegundos) => {
    setTimeout(() => {
        console.log(`passaram-se os ${intervaloEmSegundos} segundos`);
      }, intervaloEmSegundos*1000);
   
}

  
const relogio = () => {
    setInterval(() => {
        const now = new Date();
        console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
    }, 1000);  
};

relogio()
