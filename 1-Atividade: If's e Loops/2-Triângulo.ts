function triangulo (a:number, b:number, c:number) {

    if( a+b <= c || a+c <= b || b+c <= a ) {
    console.log(' As medidas informadas não formam um triângulo')
    }
    else if( a==b && a==c && b==c ){
    console.log('O triângulo informado é um equilátero, pois possui os 3 lados iguais')
    }
   else if ( a==b || a==c )   { 
    console.log('O triângulo é isósceles, pois possui apenas dois lados iguais')
    }
   else {
    console.log('O triânuglo é escaleno, pois possui os três lados diferentes')
    }
}

triangulo(5,2,3)