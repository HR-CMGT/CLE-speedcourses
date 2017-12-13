// stap 1 - luister naar het load event, roep een functie aan
window.addEventListener("load", () => startApp())

const bar = document.getElementsByTagName("loading")[0]
const answercontainer = document.getElementById("answercontainer")
const button = document.getElementById("nextquestion")
const question = document.getElementById("question")

// stap 2 - we gaan de vragen en antwoorden groeperen in een array van objecten

const vragen = [{
    question: "Wat is de bitcoin nu waard?",
    answers: ["5 euro", "15 euro", "10.000 euro"],
    correct: 2
}, {
    question: "Wat is de bitcoin nu waard?",
    answers: ["5 euro", "15 euro", "10.000 euro"],
    correct: 2
}, {
    question: "Wat is de bitcoin nu waard?",
    answers: ["5 euro", "15 euro", "10.000 euro"],
    correct: 2
}]


// stap 3 - de knop zorgt dat we een vraag gaan laden
function startApp() {
    button.addEventListener("click", () => loadQuestion())
}

function loadQuestion() {
    // stap 4 - de huidige inhoud van de answer container weggooien

    // stap 5 - je ziet hier dat de loading bar animatie start. je kan via javascript
    // checken of de animatie is afgelopen. als dat zo is roepen we "showAnswers" aan
    bar.addEventListener("animationend", ()=>showAnswers())
    bar.classList.add("loadinganimation")
}

function showAnswers() {
    bar.classList.remove("loadinganimation")

    // stap 6, toon het nummer van de vraag met behulp van ${} syntax
    // stap 7, haal de eerste vraag uit de vragen array en plaats die in een tijdelijke variabele
    // toon de vraagtekst in de html met de ${} syntax
    question.innerHTML = `<h2>Question 1</h2><p>${vragen[0].question}</p>`

    // stap 8, loop nu door alle antwoorden heen in een for loop
    // we gaan voor elk antwoord een blokje html aanmaken en in de answerscontainer plaatsen
    // vul de html met de juiste antwoordtekst met behulp van ${}

    for (let i = 0; i < 3; i++) {
        let answer = document.createElement("answer")
        answer.innerHTML = `<h3>Antwoord</h3><p>${vragen[0].answers[i]}</p>`
        answercontainer.appendChild(answer)

        // stap 9, als je op een antwoord klikt moet de "answerClicked" functie worden aangeroepen
        // in dit geval moet het click event ook worden meegegeven
        // answer.addEventListener(...)

        // bonus! animatie met javascript
        TweenLite.set(answer, { opacity: 0, x: -100 })
        TweenLite.to(answer, 0.4, { opacity: 1, delay: i * 0.2, x: 0 })
    }

}

function answerClicked(e) {
    const answers = document.getElementsByTagName("answer")
    const clicked = e.target

    for (let i = 0; i < answers.length; i++) {
        if (clicked == answers[i]) {
            // Stap 10 - toon het nummer van het aangeklikte antwoord
            // Stap 11 - als de speler op nextquestion klikt, moet de volgende vraag getoond worden en niet weer dezelfde vraag
            // Stap 12 - hoe gaan we checken of dit het goede antwoord is?
            question.innerHTML = `<h2>Feedback</h2><p>Jouw antwoord is 1</p>`
        }
    }

    // bonus javascript animatie
    TweenLite.to(answers, 0.4, { scale: 1 })
    TweenLite.to(clicked, 0.4, { scale: 1.1 })
}

