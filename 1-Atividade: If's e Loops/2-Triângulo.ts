function triangulo (a:number, b:number, c:number) {

    if( a+b <= c || a+c <= b || b+c <= a ) {
        return  console.log(' As medidas informadas não formam um triângulo')

    }
    else if( a==b && a==c && b==c ){

       return console.log('O triângulo informado é um equilátero, pois possui os 3 lados iguais')

   }
   else if ( a==b || b==c || a==c )   { 

       return console.log('O triângulo é isósceles, pois possui apenas dois lados iguais')

   }
   else {
       return console.log('O triânuglo é escaleno, pois possui os três lados diferentes')


   }
}

triangulo(5,2,3)