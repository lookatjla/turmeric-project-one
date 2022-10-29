////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// APP STATE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const state = {
    Player1: 0,
    Player2: 0,
    currentQuestion: {},
    which: true
}

let questions = []

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAIN DOM ELEMENT
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const $question = $("#Questions");
const $a = $("#a");
const $b = $("#b");
const $c = $("#c");
const $d = $("#d");
const $p1score = $("#Player1 h4");
const $p2score = $("#Player2 h4");

console.log($p2score, $p1score);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAIN APP LOGIC
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const URL = "https://cdn.contentful.com/spaces/wppm258xelxu/environments/master/entries?access_token=kXoSt3WXJZUsg8-akhTlSFtc47CUOpEmtaPKs2a_saI"
$.ajax(URL)
    .then((data) => {
        questions = data.items.map((q) => q.fields)
        console.log(data)
        console.log(questions)

        setBoard(questions)
    })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const chooseAnswer = (event, question) => {
    console.log(event)
    if (event.target.innerText === question.answer) {
        if (state.which) {
            state.player1++
            state.which = !state.which
        } else {
            state.player2++
            state.which = !state.which
        }
        setBoard(question)
    } else {
        setBoard(questions)
    }
}

const setBoard = (q) => {
    // getting a random question
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

    // update question
    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)

    // update player scores
    $p1score.text(state.player1)
    $p2score.text(state.player2)

    $("li").on("click", (e) => chooseAnswer(e, randomQuestion.question)
    )
}