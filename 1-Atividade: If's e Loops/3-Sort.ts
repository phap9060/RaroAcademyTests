function sort(array:number[] ){
    for(let i = array.length; i > 0; i--){
        for (let j = 0; j < i - 1; j++){
            if(array[j] > array[j+1]){
                const aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux
            }
        }
       
    }
    return array   
}

console.log(sort([2,5,9,10,3,8,7,6,1]))