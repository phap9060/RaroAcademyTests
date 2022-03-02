function baskara (a:number,b:number,c:number){
    const delta = b*b - (4*a*c)
    if (delta < 0){
        return (console.log("A fórmula de Baskara não pode ser aplicada, pois o delta é 0"))
    }else{
        const positiveResult = (-b + Math.sqrt(delta))/2*a
        const negativeResult = (-b - Math.sqrt(delta))/2*a
        return (console.log(`Os resultados da fórmula de baskara são ${positiveResult} e ${negativeResult}`))
    }

}
baskara(1,5,3)