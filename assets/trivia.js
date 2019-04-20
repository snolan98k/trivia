// timer//
var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 100,

    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);

        $("#sub-container").prepend(
            "<h2>Time Remaining: <span id='counter-number'>100</span> Seconds</h2>"
        );

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for (var q = 0; q < questions[i].answers.length; q++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[q] + "''>" + questions[i].answers[q]);
            }
        }

        card.append("<button id='done'>Done</button>");
    },

    done: function () {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === questions[i].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        this.result();
    },

    result: function () {
        clearInterval(timer);

        $("#sub-container- h2").remove();


        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
};
var card = $("#question-area");
//questions//
var questions = [
    {
        question: "Which fictional city is the home of Batman?",
        answers: ["Oz", "Zion", "Gotham", "Metropolis"],
        correctAnswer: "Gotham"
    },
    {
        question: "Spinach is high in which Mineral",
        answers: ["Zinc", "Iron", "Dihydrogen Oxide", "Copper"],
        correctAnswer: "Iron"
    },
    {
        question: "What's the total number of dots on a pair of dice?",
        answers: ["28", "56", "38", "42"],
        correctAnswer: "42"
    },
    {
        question: "Mount Everest is found in which mountain range?",
        answers: ["The Himalayas", "The ROcky Mountains", "The Alps", "The Andes"],
        correctAnswer: "The Himalayas"
    },
    {
        question: "In Greek mythology, who turned all that he touched into gold?",
        answers: ["Hercules", "Zues", "Medusa", "Midas"],
        correctAnswer: "Midas"
    },
    {
        question: "Who is the auther of the Harry Potter books?",
        answers: ["J.K. Rowling", "R.L. Stein", "Steven King", "Ernest Hemingway"],
        correctAnswer: "J.K. Rowling"
    }
];


// on.click//

$(document).on("click", "#start", function () {
    game.start();
});

$(document).on("click", "#done", function () {
    game.done();
});
