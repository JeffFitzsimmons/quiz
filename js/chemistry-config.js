// Chemistry Quiz
var quizJSON = {
    "info": {
        "name":    "Nomenclature Practice",
        "main":    "<h4>Chemical Names and Formulas</h4><br>",
        "results": "<h4>Learn More</h4><p>Links to more quizzes, etc.</p><br><a href='index.html' class='btn btn-lg btn-primary' role='button'>Home</a>"
    },
    "questions": [
        { // Question 1 -
            "q": "What is the chemical formula for Fluoride?",
            "a": [
                {"option": "F <sup>-</sup>",     "correct": true},
                {"option": "Cl <sup>-</sup>",     "correct": false},
                {"option": "Br <sup>-</sup>",      "correct": false},
                {"option": "I <sup>-</sup>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is F <sup>-</sup></p><br>" // no comma here
        },
        { // Question 2 -
            "q": "What is the chemical formula for Chloride?",
            "a": [
                {"option": "F <sup>-</sup>",      "correct": false},
                {"option": "Cl <sup>-</sup>",     "correct": true},
                {"option": "Br <sup>-</sup>",      "correct": false},
                {"option": "I <sup>-</sup>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is Cl <sup>-</sup></p><br>" // no comma here
        },
        { // Question 3 -
            "q": "What is the chemical formula for Bromide?",
            "a": [
                {"option": "F <sup>-</sup>",      "correct": false},
                {"option": "Cl <sup>-</sup>",     "correct": false},
                {"option": "Br <sup>-</sup>",      "correct": true},
                {"option": "I <sup>-</sup>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is Br <sup>-</sup></p><br>" // no comma here
        },
        { // Question 4 -
            "q": "What is the chemical formula for Iodide?",
            "a": [
                {"option": "F <sup>-</sup>",      "correct": false},
                {"option": "Cl <sup>-</sup>",     "correct": false},
                {"option": "Br <sup>-</sup>",      "correct": false},
                {"option": "I <sup>-</sup>",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is I <sup>-</sup></p><br>" // no comma here
        }
    ]
};
