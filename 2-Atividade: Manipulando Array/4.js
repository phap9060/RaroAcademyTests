//4. ainda com o mesmo exemplo dos alunos, implementar agora um método chamado `orderBy`.
// Esse método deverá receber um parâmetro do tipo array de objetos, e outro parâmetro, um array de strings.
// O método deverá retornar um novo array, com os objetos ordenados de acordo com o critério do array de strings. 
//Importante: O array original deve ser mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
function orderBy(students, filters){
    const result = students.map((student)=>{
        let obj = {}

        filters.forEach((filter)=>{
            obj[filter] = student[filter]
        })
        return obj
    })
 return (result.sort())

}
 

console.log(orderBy(alunos, ['nota', 'nome']))

