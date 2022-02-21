function Intersection() {
    const a = [1, 2, 3, 4, 5, 6];
    const b = [4, 4, 5, 6, 7, 8];
    const c:number[] = [];
    const d:number[] = [];
    for (let i = 0; i <= (a.length - 1); i++) {
        for (let p = 0; p <= (b.length - 1); p++) {
            if (a[i] === b[p]) {
                c[c.length]=b[p]
            }
        }
    }

    for(let j = 0; j<=(c.length-1);j++){
        if (c[j]===c[j+1]){
            d[d.length]=c[j]
            
        } else if(c[j]!==c[j-1] && c[j]!==c[j+1]) {
            d[d.length]=c[j]
        }
    }


    return (console.log(d));
}
Intersection()