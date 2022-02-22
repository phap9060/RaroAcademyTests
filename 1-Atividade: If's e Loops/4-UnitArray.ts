function uniao(){
    const a = [1, 2, 3, 4, 5, 6];
    const b = [4, 4, 5, 6, 7, 8];
    let inArray = false
     for(let i = 0; i <= b.length; i++){
         for(let p = 0; p <= a.length; p++){
                if(b[i] == a[p]){
                    inArray = true
                }
         }

         if(!inArray){
            a[a.length]= b[i]
         }else{
             inArray = false
         }
     }
     return a
}