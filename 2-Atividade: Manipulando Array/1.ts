
//1.Abaixo você tem a lista de todos os ingredientes necessários para fazer um Hambúrguer. 
//Utilizando o reduce, como você pode fazer para unir todos os itens do array em uma única string?
const ingredientes = [
    '2 hambúrgueres',
    'alface',
    'queijo',
    'molho especial',
    'cebola',
    'picles',
    'pão com gergelim'
  ];

  function makeBigMac(arr:string[]){
   
    let bigMac = arr.reduce((prev,element)=> {
        if(prev !== undefined){
            return(` ${prev}, ${element}`)
        }else{
            return(`${element}`)
        }
    })
    return bigMac
    }

        

  console.log(makeBigMac(ingredientes))