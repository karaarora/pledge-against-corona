let questions = [
    "Question 1",
    "Question 2",
    "Question 3"
]

let storageKey = "questionIndex"

let questionIndex = getQuestionIndex();

if (localStorage.getItem(storageKey) === null) {
    localStorage.setItem(storageKey, 0)
}

function getQuestionIndex() {
    let index = localStorage.getItem(storageKey);
    if (index < 0) return 0;
    return index;
}

function displayQuestion() {
    if (questionIndex < questions.length) {
        let questionContainer = $('#question')
        questionContainer.html(questions[questionIndex])
    } else {
        $("#some-answered").hide()
        $("#all-answered").show()
    }
}

$('#btn-yes').on('click', () => {
    questionIndex++;
    displayQuestion()
    localStorage.setItem(storageKey, questionIndex)
    //Hit api
})

$('#btn-no').on('click', () => {
    questionIndex++;
    displayQuestion()
    localStorage.setItem(storageKey, questionIndex)
    //Hit api
})

displayQuestion()
