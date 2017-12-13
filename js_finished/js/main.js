window.addEventListener("load", () => startApp())

const bar = document.getElementsByTagName("loading")[0]
const answercontainer = document.getElementById("answercontainer")
const button = document.getElementById("nextquestion")
const question = document.getElementById("question")

let counter = 0

const questions = [{
        question:"Wat is de bitcoin nu waard?", 
        answers: ["5 euro", "15 euro", "10.000 euro"]
    },{
        question: "Wat is de bitcoin nu waard?",
        answers: ["100 euro", "200 euro", "15.000 euro"]
    },{
        question: "Wat is de bitcoin nu waard?",
        answers: ["150 euro", "500 euro", "25.000 euro"]
    }]

function startApp(){
    button.addEventListener("click", () => loadQuestion())
}

function loadQuestion() { 
    answercontainer.innerHTML = ""
    bar.addEventListener("animationend", showAnswers)
    bar.classList.add("loadinganimation")
}

function showAnswers(){
    bar.classList.remove("loadinganimation")
    question.innerHTML = `<h2>Question ${counter+1}</h2><p>${questions[counter].question}</p>`

    const currentAnswers = questions[counter].answers
    
    for (let i = 0; i < currentAnswers.length; i++){
        let answer = document.createElement("answer")
        answer.innerHTML = `<h3>Antwoord ${i + 1}</h3><p>${currentAnswers[i]}</p>`
   
        answercontainer.appendChild(answer)
        answer.addEventListener("click", (e) => selectAnswer(e))

        TweenLite.set(answer, { opacity: 0, x: -100 })
        TweenLite.to(answer, 0.4, {opacity:1, delay:i*0.2, x:0})
    }

    // alvast optellen
    counter++
    if (counter == questions.length) counter = 0
}

function selectAnswer(e){
    const answers = document.getElementsByTagName("answer")
    const clicked = e.target

    for(let i = 0;i<answers.length;i++){
        if(clicked == answers[i]) {
            // hier weten we dat i het gegeven antwoord is van de speler
            // todo: voeg de index van het goede antwoord toe aan de vragen array
            // check daarna of i het goede antwoord is
            question.innerHTML = `<h2>Feedback</h2><p>Jouw antwoord is ${i}</p>`
        }
    }

    TweenLite.to(answers, 0.4, { scale: 1 })
    TweenLite.to(clicked, 0.4, { scale: 1.1 })
}

