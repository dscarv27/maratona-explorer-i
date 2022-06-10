const answerElement = document.querySelector('#answerElement')
const askInput = document.querySelector('#askInput')
const askButton = document.querySelector('#askButton')
const answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
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
    
    answerElement.innerHTML = ask + asnwers[randomNumber]
    answerElement.style.opacity = 1;
    //sumir a resposta depois de 3 segundos
    setTimeout(function(){
        answerElement.style.opacity = 0
        askButton.removeAttribute("disable")
    }, 3000)
}