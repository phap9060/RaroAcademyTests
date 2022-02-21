function Difference() {
    const a = [1, 2, 3, 4, 5, 6];
    const b = [4, 4, 5, 6, 7, 8];
    const c:number[] = []
    for (let i = 0; i <= (a.length - 1); i++) {
        let count = 0
        for (let p = 0; p <= (b.length - 1); p++) {
            if (a[i]!==b[p]){
                count++
            }
            if (count === b.length){
                c[c.length] = a[i]
                
            }
        }
    }


    return (console.log(c));
}
Difference()