const ListQuestions = [
    {
        Pergunta:"O que você faria se tivesse 30 mil reais?",
        opção1: ['Colocaria na poupança.',10],
        opção2: ['Usaria para viajar ou realizaria outros sonhos.',0],
        opção3: ['Abriria ou investiria no meu proprio negocio.',40],
        opção4: ['Usaria para fazer faculdade.',10],
        opção5: ['Ajudaria alguma pessoa.',0],
    },
    {
        Pergunta:"Se você estivesse num emprego fixo e gostaria de aumentar o seu salario, como você iria proceder?",
        opção1: ['Iria encher o saco do chefe para um aumento.',20],
        opção2: ['Faria hora extra.',0],
        opção3: ['Acharia um emprego melhor.',50],
        opção4: ['Iria empreender nas horas vagas, fazer algum bico.',50],
        opção5: ['Iria estudar, aprender alguma skill nova ou fazer faculdade.',40],
    },
    {
        Pergunta:"O que você mais faz no seu tempo livre de lazer?",
        opção1: ['Leio livros.',50],
        opção2: ['Vou conhecer pessoas novas.',30],
        opção3: ['Viajo,faço e vou para festas.',0],
        opção4: ['Fico assistindo filmes ou jogando video game.',0],
        opção5: ['Tento praticar algum hooby de crescimento pessoal como exercicios, artes marciais, desenho e outros.',20],
    },
    {
        Pergunta:"O que você acha importante numa amizade?",
        opção1: ['Gosto de boas energias e de pessoas positivas.',50],
        opção2: ['Gosto de pessoas que me ajudam e estejam nos melhores momentos.',30],
        opção3: ['Não gosto de amizades, prefiro ficar sozinho e não investir em pessoas.',0],
        opção4: ['Gosto de pessoas que eu possa sair e curtir a vida.',0],
        opção5: ['Só passo o tempo com pessoas que não abusam de mim, sejam honestas e aprendo muita coisa com elas.',30],
    },
    {
        Pergunta:"Você se considera uma pessoa?",
        opção1: ['Solidariedade, sempre quer ajudar e contribuir aonde estiver.',20],
        opção2: ['Gosta de competir com outras e bater metas.',30],
        opção3: ['Me considero uma pessoa focada e persistente.',50],
        opção4: ['Procuro ser a melhor e trabalhar duro.',10],
        opção5: ['Nenhuma dessas opções.',0],
    },
    {
        Pergunta:"Numa crise economica, quando você perde o emprego quem você culpa?",
        opção1: ['Geralmente é culpa do governo.',0],
        opção2: ['O capitalismo e a ganancia são o verdadeiro mal.',0],
        opção3: ['As pessoas a minha volta como familia, colegas e chefe.',0],
        opção4: ['Foi o azar mesmo.',0],
        opção5: ['Nenhuma das opções.',50],
    },
    {
        Pergunta:"Qual é a sua ideia sobre dinheiro ou como você prefere gastar o dinheiro?",
        opção1: ['Dinheiro não é importante tem coisas mais valiosas na vida.',10],
        opção2: ['Dinheiro é algo ruim e a origem de todo mal no mundo.',0],
        opção3: ['Dinheiro é apenas um recurso para comprar coisas.',0],
        opção4: ['Dinheiro é para ajudar quem nos amamos.',20],
        opção5: ['Nenhuma das opções.',50],
    },
    {
        Pergunta:"Qual é o seu foco, objetivo na vida?",
        opção1: ['Tenho interesse em crescer na vida, fazer faculdade e conseguir um emprego.',10],
        opção2: ['Quero trabalhar e aproveitar a vida pois ela é curta.',0],
        opção3: ['Desejo mudar a vida das pessoas da melhor maneira possivel.',20],
        opção4: ['Não tenho objetivo só quero proteger quem eu amo e dar as melhores condições.',0],
        opção5: ['Nenhuma dessas opções.',0],
    },
    {
        Pergunta:"O que você acha das pessoas ricas?",
        opção1: ['São pessoas gananciosas, que só pensam em si mesmas.',0],
        opção2: ['Tiveram sorte na vida.',0],
        opção3: ['Roubar e exploram as pessoas.',0],
        opção4: ['Individualistas e deviam compartilhar a sua riqueza.',0],
        opção5: ['Nenhuma delas.',50],
    },
    {
        Pergunta:"Como você acha que elas ficam ricas?",
        opção1: ['Trabalham muito duro.',20],
        opção2: ['Acordam cedo.',20],
        opção3: ['São Aliens e seres divinos mesmo.',0],
        opção4: ['Elas tiveram sorte ou nasceram ricas.',0],
        opção5: ['Nenhuma delas.',50],
    },
    {
        Pergunta:"O que você acha do tempo?",
        opção1: ['Ele é muito importante queria ter mais tempo.',50],
        opção2: ['É apenas tempo e a gente tem o dia todo e a vida toda.',0],
        opção3: ['Queria ter mais tempo para relaxar mais.',20],
        opção4: ['Quando temos dinheiro, não temos tempo.',0],
        opção5: ['Nenhuma delas.',0],
    },
    {
        Pergunta:"Qual seria a melhor forma que gostaria de ganhar dinheiro?",
        opção1: ['Fazer concurso e trabalhar num emprego publico.',0],
        opção2: ['Queria trabalhar numa empresa em uma posição em que eu ganha-se muito bem.',20],
        opção3: ['Ter uma empresa que dá muito dinheiro.',50],
        opção4: ['Queria ganhar dinheiro sem fazer nada mesmo.',0],
        opção5: ['Nenhuma delas.',0],
    },   
    {
        Pergunta:"Se você estivesse num emprego fixo e gostaria de aumentar o seu salario, como você iria proceder?",
        opção1: ['Iria encher o saco do chefe para um aumento.',20],
        opção2: ['Faria hora extra.',0],
        opção3: ['Acharia um emprego melhor.',40],
        opção4: ['Iria empreender nas horas vagas, fazer algum bico.',50],
        opção5: ['Iria estudar, aprender alguma skill nova ou fazer faculdade.',40],
    },
]




const head = document.querySelector('#header')

const start = document.querySelector('#start')
const questions = document.querySelector('#questions')
const results = document.querySelector('#results')

const option = document.querySelectorAll('#option')
const optionList = document.querySelector('#optionList')
const optionEACH = document.querySelectorAll('.option')

const buttonGO = document.querySelector('#buttonGo')
const buttonNEXT = document.querySelector('#Next')

var score = 0
let index = 0
var points = 0
var total = 560


questions.style.display = 'none'
results.style.display = 'none'
buttonNEXT.style.display = 'none'





function GOquestions () {


    start.style.display = 'none'
    buttonGO.style.display = 'none'

    
    questions.style.display = 'inline-block'

}
buttonGO.onclick = GOquestions


function choice (event) {
    
    const clicado = event.target 

    optionEACH.forEach(event => event.classList.remove("optionS"))


    if (event.target === optionEACH[0]) {points =+ ListQuestions[index].opção1[1]} 
    if (event.target === optionEACH[1]) {points =+ ListQuestions[index].opção2[1]}
    if (event.target === optionEACH[2]) {points =+ ListQuestions[index].opção3[1]}
    if (event.target === optionEACH[3]) {points =+ ListQuestions[index].opção4[1]}
    if (event.target === optionEACH[4]) {points =+ ListQuestions[index].opção5[1]}



    buttonNEXT.style.display = 'inline-block'
    event.stopPropagation()
    clicado.classList.toggle('optionS') 
}
optionEACH.forEach(event => event.onclick = choice);



function NEXT () {
    index++

    questions.childNodes[1].innerHTML = ListQuestions[index].Pergunta
    questions.childNodes[3].childNodes[1].childNodes[1].textContent = ListQuestions[index].opção1[0]
    questions.childNodes[3].childNodes[3].childNodes[1].textContent = ListQuestions[index].opção2[0]
    questions.childNodes[3].childNodes[5].childNodes[1].textContent = ListQuestions[index].opção3[0]
    questions.childNodes[3].childNodes[7].childNodes[1].textContent = ListQuestions[index].opção4[0]
    questions.childNodes[3].childNodes[9].childNodes[1].textContent = ListQuestions[index].opção5[0]


    score = score+=points 
    results.childNodes[3].childNodes[3].innerHTML =  `${(score*100/total).toFixed(0)}%` 
    
    buttonNEXT.style.display = 'none'
    optionEACH.forEach(event => event.classList.remove("optionS"))

    if (index > 11) {
    buttonNEXT.style.display = 'none'
    questions.style.display = 'none'    

    results.style.display = 'inline-block'}

}
buttonNEXT.addEventListener("click", NEXT)

