// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz({
        checkAnswerText:  'Check Answer',
        nextQuestionText: 'Next <span class="glyphicon glyphicon-chevron-right"></span>',
        preventUnansweredText: 'Your answer cannot be blank.',
        randomSortQuestions: true,
        randomSortAnswers: true,
        preventUnanswered: true,
        disableRanking: true,
        scoreAsPercentage: true,
        perQuestionResponseAnswers: true
    });
});
