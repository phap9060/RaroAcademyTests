const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];
type props = {
    nome?:string,
    nota?:number,
    bolsista?:boolean
}
const filters = ['nota','nome'];

function pick(students:Array<props>, filters:string[]){
    const result = students.map((student)=>{
        let obj:props = {}

        filters.forEach((filter)=>{
            obj[filter] = student[filter]
        })
        return obj
    })
 return result