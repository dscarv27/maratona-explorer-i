const answerElement = document.querySelector('#answerElement')
const askInput = document.querySelector('#askInput')
const askButton = document.querySelector('#askButton')
const loading = document.querySelector('#loading')
const answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "Não conte com isso.",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "O fio do destino está sempre... Na palma da sua mão!",
    "Sinais apontam que sim.",
    "Quando você não pode vencer o destino por conta própria, é quando você confia em seus amigos e equipe!",
]

//clicar em fazer pergunta
function askQuestion(){

    if(askInput.value == ""){
        alert("Digite sua pergunta")
        return
    }
    askButton.setAttribute("disabled", true)

    const ask = "<div>" + askInput.value + "</div>"

    //gerar numero aleatorio
    const fullAnswers = answers.length;
    const randomNumber = Math.floor(Math.random() * fullAnswers);
    
    loading.style.display = "block"

    setTimeout(function(){
        answerElement.innerHTML = answers[randomNumber]
        answerElement.style.opacity = 1;
        loading.style.display = "none";
    }, 3000)


    //sumir a resposta depois de 6 segundos
    setTimeout(function(){
        answerElement.style.opacity = 0
        askButton.removeAttribute("disabled")
    }, 6000)
}