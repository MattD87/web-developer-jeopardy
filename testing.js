//Global Quiz Object
const quizApp = {};

//global variables
quizApp.score = 0;

quizApp.questions = [
  //category 1 questions
  {
    title: `Cat 1 200$ Question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 200,
    id: 1200
  },
  {
    title: `Cat 1 $400 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 400,
    id: 1400
  },
  {
    title: `Cat 1 $600 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 600,
    id: 1600
  },
  {
    title: `Cat 1 $800 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 800,
    id: 1800
  },
  {
    title: `Cat 1 $1000 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 1000,
    id: 11000
  },
  //category 2 questions
  {
    title: `Cat 2 200$ Question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 200,
    id: 2200
  },
  {
    title: `$400 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 400,
    id: 2400
  },
  {
    title: `$600 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 600,
    id: 2600
  },
  {
    title: `$800 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 800,
    id: 2800
  },
  {
    title: `$1000 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 1000,
    id: 21000
  },
  //category 3 questions
  {
    title: `Cat 3 200$ Question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 200,
    id: 3200
  },
  {
    title: `$400 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 400,
    id: 3400
  },
  {
    title: `$600 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 600,
    id: 3600
  },
  {
    title: `$800 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 800,
    id: 3800
  },
  {
    title: `$1000 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 1000,
    id: 31000
  },
  //category 4 questions
  {
    title: `Cat 4 200$ Question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 200,
    id: 4200
  },
  {
    title: `$400 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 400,
    id: 4400
  },
  {
    title: `$600 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 600,
    id: 4600
  },
  {
    title: `$800 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 800,
    id: 4800
  },
  {
    title: `$1000 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 1000,
    id: 41000
  }
];

//quiz functions
quizApp.startQuiz = function() {
  $(`.startPage a`).click(function(e) {
    e.preventDefault();
    $(`.startPage`).hide();
    $(`.quiz`).show();
  });
};
quizApp.showQuestion = function() {
  $(".button").on("click", function() {
    const buttonId = $(this).attr("id");
    // console.log(buttonId);
    quizApp.questionContent(buttonId);

  });
};
quizApp.growQuestion = function() {
  $(".button").on("click", function() {
    $('.questionContainer').toggleClass("change-size");
  });
};

quizApp.questionContent = (clickId) => {
                                    //for each item in quizapp.questions
   for (let i = 0; i < quizApp.questions.length; i++ ){    
                                  // if click id is same as array id                                  
    if (clickId == quizApp.questions[i].id) {
                                    //save that objects title and answers in two variables
      const question = quizApp.questions[i].title;
      const answers = quizApp.questions[i].answers;
                                  //grab the box with the click id and display the title and answers
      $('.questionContainer').html(`<h2>${question}</h2><ul class="questions"></ul>`);
      for (let i = 0; i < answers.length; i++) {
        $('.questions').append(`<li>${answers[i]}</li>`);        
      }
    };
  };
};

quizApp.selectOption = function() {
  $(`.questionContainer`).on(`click`, `li`, function() {
    $(`.selected`).removeClass(`selected`);
    $(this).addClass(`selected`);
  });
}

//initialization
quizApp.init = function() {
  this.startQuiz();
  this.showQuestion();
  this.growQuestion();
  this.selectOption();
};

//document ready
$(function() {
  quizApp.init();
});
