var num =1;

var txt = 'ola';

var logico_v = true;

var logico_f = false;

var lista_mesmo_tipo = ['arroz', 'feijao', 'batata'];

var lista_tipo_mesclando = ['nota', 10, 'nota', 5];

var objeto = {
    'nome': 'luis',
    'idade': 19,
    'altura': 1.67,
    'situacao': true,
    'linguagem_fav': ['javascript', 'python', 'java']
}

var vazio = null;
var indefinido = undefined;

console.log(num, txt, logico_v, logico_f, lista_mesmo_tipo, 
    lista_tipo_mesclando, objeto, vazio, indefinido)

txt = 'texto substituido'

logico_v = 'verdadeiro'

console.log(txt, logico_v)

var aluno = {
    'nome': 'joao',
    'dt_nascimento': '25/04/2015',
    'endereco':{
        'rua': 'abc, 1234',
        'cidade': 'sao paulo',
        'uf': 'sp'
    }
}

console.log(aluno)

var global = 'eu sou global';

function minha_funcao() {
    var local = 'eu sou local'
    console.log(local)
}


minha_funcao()

// nao é possivel chamar uma variavel fora do escopo
// console.log(local, global)

function teste_const(){
    const x = 10;
    console.log(x)
    if(x){
        const x = 5;
        console.log(x)
    } //nao permite re-atribuição de variavel
    console.log(x)
}
function teste_var(){
    var x = 10;
    console.log(x)
    if(x){
        var x = 5;
        console.log(x)
    }
    console.log(x)
}
function teste_let(){
    let x = 10;
    console.log(x)
    if(x){
        let x = 5;
        console.log(x)
    }
    console.log(x)
}

console.log("const")
teste_var()
console.log("let")
teste_let()
console.log("var")
teste_const()

function teste_alert(){
    alert('meu alert')
}

function teste_prompt(){
    let x = prompt('infrome um numero')
    console.log(x)
}

function teste_confirm(){
    let r = confirm('deseja continuar?')
    console.log(r)
}