//Implementar o método de pick que receba um parâmetro do tipo array de objetos, 
//e outro parâmetro do tipo array de strings. Este método deverá retornar todos os itens do array original, 
//porém, mantendo somente os atributos com os nomes passados no segundo atributo. 
//Importante: o array original deve ser mantido intacto.
// Abaixo, segue um exemplo do funcionamento esperado:

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

const filters = ['nome','nota'];

function pick(students, filters){
    const result = students.map((student)=>{
        let obj = {}

        filters.forEach((filter)=>{
            obj[filter] = student[filter]
        })
        return obj
    })
 return result

}
 


console.log(pick(alunos,filters))