// Physics Quiz
var quizJSON = {
    "info": {
        "name":    "Physics Example",
        "main":    "<h4>Physics Stuff</h4><br>",
        "results": "<h4>Learn More</h4><p>Links to more quizzes, etc.</p><br><a href='index.html' class='btn btn-lg btn-primary' role='button'>Home</a>"
    },
    "questions": [
        { // Question 1 -
            "q": "Physics question 1",
            "a": [
                {"option": "Answer 1",     "correct": true},
                {"option": "Answer 2",     "correct": false},
                {"option": "Answer 3",     "correct": false},
                {"option": "Answer 4",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span></p><br>" // no comma here
        },
        { // Question 2 -
            "q": "Physics question 2",
            "a": [
                {"option": "Answer 1",     "correct": true},
                {"option": "Answer 2",     "correct": true},
                {"option": "Answer 3",     "correct": false},
                {"option": "Answer 4",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span></p><br>" // no comma here
        }
    ]
};
