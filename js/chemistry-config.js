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
                {"option": "HF",                        "correct": false},
                {"option": "F<sub>2</sub><sup>-</sup>", "correct": false},
                {"option": "F<sup>2-</sup>",            "correct": false},
                {"option": "F<sup>-</sup>",             "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is F<sup>-</sup></p><br>" // no comma here
        },
        { // Question 2 -
            "q": "What is the chemical formula for Chloride?",
            "a": [
                {"option": "ClO<sup>-</sup>",               "correct": false},
                {"option": "Cl<sub>2</sub><sup>-</sup>",    "correct": false},
                {"option": "Cl<sup>2-</sup>",               "correct": false},
                {"option": "Cl<sup>-</sup>",                "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is Cl<sup>-</sup></p><br>" // no comma here
        },
        { // Question 3 -
            "q": "What is the chemical formula for Bromide?",
            "a": [
                {"option": "Br<sub>2</sub><sup>-</sup>",    "correct": false},
                {"option": "Br<sup>2-</sup>",               "correct": false},
                {"option": "B<sup>-</sup>",                 "correct": false},
                {"option": "Br<sup>-</sup>",                "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is Br<sup>-</sup></p><br>" // no comma here
        },
        { // Question 4 -
            "q": "What is the chemical formula for Iodide?",
            "a": [
                {"option": "IO<sub>4</sub><sup>-</sup>",    "correct": false},
                {"option": "I<sub>2</sub><sup>-</sup>",     "correct": false},
                {"option": "I<sup>2-</sup>",                "correct": false},
                {"option": "I<sup>-</sup>",                 "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is I<sup>-</sup></p><br>" // no comma here
        },
        { // Question 5 -
            "q": "What is the chemical formula for Oxide?",
            "a": [
                {"option": "O<span class='supsub'>2<br/>2</span><sup>-</sup>",  "correct": false},
                {"option": "OH<sup>-</sup>",                                    "correct": false},
                {"option": "O<sub>3</sub><sup>-</sup>",                         "correct": false},
                {"option": "O<sup>2-</sup>",                                    "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is O<sup>2-</sup></p><br>" // no comma here
        },
        { // Question 6 -
            "q": "What is the chemical formula for Sulfide?",
            "a": [
                {"option": "S<sup>4-</sup>",                            "correct": false},
                {"option": "S<sub>2</sub>O<sub>3</sub><sup>2-</sup>",   "correct": false},
                {"option": "SO<sub>4</sub><sup>2-</sup>",               "correct": false},
                {"option": "S<sup>2-</sup>",                            "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is S<sup>2-</sup></p><br>" // no comma here
        },
        { // Question 7 -
            "q": "What is the chemical formula for Nitride?",
            "a": [
                {"option": "NO<sub>2</sub><sup>-</sup>",    "correct": false},
                {"option": "NO<sub>3</sub><sup>-</sup>",    "correct": false},
                {"option": "NH<sub>4</sub><sup>+</sup>",    "correct": false},
                {"option": "N<sup>3-</sup>",                "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is N<sup>3-</sup></p><br>" // no comma here
        },
        { // Question 8 -
            "q": "What is the chemical formula for Phosphide?",
            "a": [
                {"option": "F<sup>-</sup>",                 "correct": false},
                {"option": "P<sub>2</sub><sup>3-</sup>",    "correct": false},
                {"option": "PO<sub>4</sub><sup>3-</sup>",   "correct": false},
                {"option": "P<sup>3-</sup>",                "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is P<sup>3-</sup></p><br>" // no comma here
        },
        { // Question 9 -
            "q": "What is the chemical formula for Hydroxide?",
            "a": [
                {"option": "O<sup>2-</sup>",                                    "correct": false},
                {"option": "H<sub>3</sub>O<sup>+</sup>",                        "correct": false},
                {"option": "O<span class='supsub'>2<br/>2</span><sup>-</sup>",  "correct": false},
                {"option": "OH<sup>-</sup>",                                    "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is OH<sup>-</sup></p><br>" // no comma here
        },
        { // Question 10 -
            "q": "What is the chemical formula for Peroxide?",
            "a": [
                {"option": "O<sub>3</sub><sup>-</sup>",                         "correct": false},
                {"option": "O<sup>2-</sup>",                                    "correct": false},
                {"option": "OH<sup>-</sup>",                                    "correct": false},
                {"option": "O<span class='supsub'>2<br/>2</span><sup>-</sup>",  "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is O<span class='supsub'>2<br/>2</span><sup>-</sup></p><br>" // no comma here
        },
        { // Question 11 -
            "q": "What is the chemical formula for Cyanide?",
            "a": [
                {"option": "SCN<sup>-</sup>",               "correct": false},
                {"option": "Cl<sup>-</sup>",                "correct": false},
                {"option": "KCN",                           "correct": false},
                {"option": "CN<sup>-</sup>",                "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is CN<sup>-</sup></p><br>" // no comma here
        },
        { // Question 12 -
            "q": "What is the chemical formula for Thiocyanate?",
            "a": [
                {"option": "CN<sup>-</sup>",                            "correct": false},
                {"option": "HS<sup>-<sup>",                             "correct": false},
                {"option": "S<sub>2</sub>O<sub>3</sub><sup>2-</sup>",   "correct": false},
                {"option": "SCN<sup>-</sup>",                           "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is SCN<sup>-</sup></p><br>" // no comma here
        },
        { // Question 13 -
            "q": "What is the chemical formula for Nitrate?",
            "a": [
                {"option": "NO<sub>2</sub><sup>-</sup>",    "correct": false},
                {"option": "N<sup>3-</sup>",                "correct": false},
                {"option": "NO<sub>3</sub><sup>2-</sup>",   "correct": false},
                {"option": "NO<sub>3</sub><sup>-</sup>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is NO<sub>3</sub><sup>-</sup></p><br>" // no comma here
        },
        { // Question 14 -
            "q": "What is the chemical formula for Nitrite?",
            "a": [
                {"option": "NO<sub>3</sub><sup>-</sup>",    "correct": false},
                {"option": "N<sup>3-</sup>",                "correct": false},
                {"option": "NH<sub>4</sub><sup>+</sup>",    "correct": false},
                {"option": "NO<sub>2</sub><sup>-</sup>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is NO<sub>2</sub><sup>-</sup></p><br>" // no comma here
        },
        { // Question 15 -
            "q": "What is the chemical formula for Sulfate?",
            "a": [
                {"option": "S<sub>2</sub>O<sub>3</sub><sup>2-</sup>",   "correct": false},
                {"option": "SO<sub>3</sub><sup>2-</sup>",               "correct": false},
                {"option": "HSO<sub>4</sub><sup>-</sup>",               "correct": false},
                {"option": "SO<sub>4</sub><sup>2-</sup>",               "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is SO<sub>4</sub><sup>2-</sup></p><br>" // no comma here
        },
        { // Question 16 -
            "q": "What is the chemical formula for Sulfite?",
            "a": [
                {"option": "S<sub>2</sub>O<sub>3</sub><sup>2-</sup>",   "correct": false},
                {"option": "SO<sub>2</sub><sup>2-</sup>",               "correct": false},
                {"option": "SO<sub>4</sub><sup>2-</sup>",               "correct": false},
                {"option": "SO<sub>3</sub><sup>2-</sup>",               "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is SO<sub>3</sub><sup>2-</sup></p><br>" // no comma here
        },
        { // Question 17 -
            "q": "What is the chemical formula for Thiosulfate?",
            "a": [
                {"option": "SO<sub>3</sub><sup>2-</sup>",               "correct": false},
                {"option": "S<sup>2-</sup>",                            "correct": false},
                {"option": "SCN<sup>-</sup>",                           "correct": false},
                {"option": "S<sub>2</sub>O<sub>3</sub><sup>2-</sup>",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is S<sub>2</sub> O<sub>3</sub><sup>2-</sup></p><br>" // no comma here
        },
        { // Question 18 -
            "q": "What is the chemical formula for Perchlorate?",
            "a": [
                {"option": "ClO<sub>2</sub><sup>-</sup>",   "correct": false},
                {"option": "Cl<sup>-</sup>",                "correct": false},
                {"option": "ClO<sub>3</sub><sup>-</sup>",   "correct": false},
                {"option": "ClO<sub>4</sub><sup>-</sup>",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is ClO<sub>4</sub><sup>-</sup></p><br>" // no comma here
        },
        { // Question 19 -
            "q": "What is the chemical formula for Chlorate?",
            "a": [
                {"option": "ClO<sub>2</sub><sup>-</sup>",   "correct": false},
                {"option": "Cl<sup>-</sup>",                "correct": false},
                {"option": "ClO<sub>4</sub><sup>-</sup>",   "correct": false},
                {"option": "ClO<sub>3</sub><sup>-</sup>",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is ClO<sub>3</sub><sup>-</sup></p><br>" // no comma here
        },
        { // Question 20 -
            "q": "What is the chemical formula for Chlorite?",
            "a": [
                {"option": "ClO<sub>3</sub><sup>-</sup>",   "correct": false},
                {"option": "Cl<sup>-</sup>",                "correct": false},
                {"option": "ClO<sub>4</sub><sup>-</sup>",   "correct": false},
                {"option": "ClO<sub>2</sub><sup>-</sup>",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is ClO<sub>2</sub><sup>-</sup></p><br>" // no comma here
        },
        { // Question 21 -
            "q": "What is the chemical formula for Hypochlorite?",
            "a": [
                {"option": "CrO<sub>4</sub><sup>2-</sup>",  "correct": false},
                {"option": "Cl<sup>-</sup>",                "correct": false},
                {"option": "CO<sub>3</sub><sup>2-</sup>",   "correct": false},
                {"option": "ClO<sup>-</sup>",               "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is ClO<sup>-</sup></p><br>" // no comma here
        },
        { // Question 22 -
            "q": "What is the chemical formula for Carbonate?",
            "a": [
                {"option": "ClO<sup>-</sup>",               "correct": false},
                {"option": "HCO<sub>3</sub><sup>-</sup>",   "correct": false},
                {"option": "CrO<sub>4</sub><sup>2-</sup>",  "correct": false},
                {"option": "CO<sub>3</sub><sup>2-</sup>",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is CO<sub>3</sub><sup>2-</sup></p><br>" // no comma here
        },
        { // Question 23 -
            "q": "What is the chemical formula for Oxalate?",
            "a": [
                {"option": "O<span class='supsub'>2<br/>2</span><sup>-</sup>",      "correct": false},
                {"option": "C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup>",   "correct": false},
                {"option": "OH<sup>-</sup>",                                        "correct": false},
                {"option": "C<sub>2</sub>O<sub>4</sub><sup>2-</sup>",               "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is C<sub>2</sub>O<sub>4</sub><sup>2-</sup>" // no comma here
        },
        { // Question 24 -
            "q": "What is the chemical formula for Phosphate?",
            "a": [
                {"option": "PO<sub>3</sub><sup>2-</sup>",   "correct": false},
                {"option": "PO<sub>2</sub><sup>3-</sup>",   "correct": false},
                {"option": "P<sup>3-</sup>",                "correct": false},
                {"option": "PO<sub>4</sub><sup>3-</sup>",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is PO<sub>4</sub><sup>3-</sup></p><br>" // no comma here
        },
        { // Question 25 -
            "q": "What is the chemical formula for Permanganate?",
            "a": [
                {"option": "PO<sub>4</sub><sup>3-</sup>",   "correct": false},
                {"option": "P<sup>3-</sup>",                "correct": false},
                {"option": "CrO<sub>4</sub><sup>-</sup>",   "correct": false},
                {"option": "MnO<sub>4</sub><sup>-</sup>",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is MnO<sub>4</sub><sup>-</sup></p><br>" // no comma here
        },
        { // Question 26 -
            "q": "What is the chemical formula for Chromate?",
            "a": [
                {"option": "Cr<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup>",  "correct": false},
                {"option": "CrO<sub>3</sub><sup>-</sup>",                           "correct": false},
                {"option": "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>",              "correct": false},
                {"option": "CrO<sub>4</sub><sup>2-</sup>",                          "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is CrO<sub>4</sub><sup>2-</sup></p><br>" // no comma here
        },
        { // Question 27 -
            "q": "What is the chemical formula for Dichromate?",
            "a": [
                {"option": "CrO<sub>4</sub><sup>2-</sup>",                          "correct": false},
                {"option": "Cr<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup>",  "correct": false},
                {"option": "CrO<sub>7</sub><sup>2-</sup>",                          "correct": false},
                {"option": "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>",              "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup></p><br>" // no comma here
        },
        { // Question 28 -
            "q": "What is the chemical formula for Hydrogen Sulfate (Bisulfate)?",
            "a": [
                {"option": "H<sub>3</sub>SO<sub>2</sub><sup>-</sup>",   "correct": false},
                {"option": "H<sub>2</sub>SO<sub>3</sub>",               "correct": false},
                {"option": "HSO<sub>3</sub><sup>-</sup>",               "correct": false},
                {"option": "HSO<sub>4</sub><sup>-</sup>",               "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is HSO<sub>4</sub><sup>-</sup></p><br>" // no comma here
        },
        { // Question 29 -
            "q": "What is the chemical formula for Hydrogen Sulfite (Bisulfite)?",
            "a": [
                {"option": "HSO<sub>4</sub><sup>-</sup>",               "correct": false},
                {"option": "H<sub>3</sub>SO<sub>2</sub><sup>-</sup>",   "correct": false},
                {"option": "H<sub>2</sub>SO<sub>3</sub>",               "correct": false},
                {"option": "HSO<sub>3</sub><sup>-</sup>",               "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is HSO<sub>3</sub><sup>-</sup></p><br>" // no comma here
        },
        { // Question 30 -
            "q": "What is the chemical formula for Hydrogen Carbonate (Bicarbonate)?",
            "a": [
                {"option": "HCO<sub>4</sub><sup>-</sup>",   "correct": false},
                {"option": "H<sub>3</sub>CO<sup>2-</sup>",  "correct": false},
                {"option": "H<sub>2</sub>CO<sub>3</sub>",   "correct": false},
                {"option": "HCO<sub>3</sub><sup>-</sup>",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is HCO<sub>3</sub><sup>-</sup></p><br>" // no comma here
        },
        { // Question 31 -
            "q": "What is the chemical formula for Hydrogen Phosphate?",
            "a": [
                {"option": "HPO<sub>3</sub><sup>-</sup>",               "correct": false},
                {"option": "H<sub>3</sub>PO<sub>3</sub><sup>-</sup>",   "correct": false},
                {"option": "H<sub>2</sub>PO<sub>4</sub><sup>2-</sup>",  "correct": false},
                {"option": "HPO<sub>4</sub><sup>2-</sup>",              "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is HPO<sub>4</sub><sup>2-</sup></p><br>" // no comma here
        },
        { // Question 32 -
            "q": "What is the chemical formula for Dihydrogen Phosphate?",
            "a": [
                {"option": "H<sub>3</sub>PO<sub>4</sub>",               "correct": false},
                {"option": "HPO<sub>2</sub><sup>-</sup>",               "correct": false},
                {"option": "HPO<sub>4</sub><sup>2-</sup>",              "correct": false},
                {"option": "H<sub>2</sub>PO<sub>4</sub><sup>-</sup>",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is H<sub>2</sub>PO<sub>4</sub><sup>2-</sup></p><br>" // no comma here
        },
        { // Question 33 -
            "q": "What is the chemical formula for Acetate?",
            "a": [
                {"option": "C<sub>2</sub>O<sub>4</sub><sup>2-</sup>",               "correct": false},
                {"option": "C<sub>2</sub>O<sub>2</sub><sup>-</sup>",                "correct": false},
                {"option": "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>",              "correct": false},
                {"option": "C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup>",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup></p><br>" // no comma here
        },
        { // Question 34 -
            "q": "What is the chemical formula for Ammonium?",
            "a": [
                {"option": "NO<sub>3</sub><sup>-</sup>",    "correct": false},
                {"option": "N<sup>3-</sup>",                "correct": false},
                {"option": "NH<sub>3</sub>",                "correct": false},
                {"option": "NH<sub>4</sub><sup>+</sup>",    "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is NH<sub>4</sub><sup>+</sup></p><br>" // no comma here
        },
        { // Question 35 -
            "q": "What is the chemical formula for Mercury (I) ion?",
            "a": [
                {"option": "HSO<sub>4</sub><sup>-</sup>",                       "correct": false},
                {"option": "HPO<sub>4</sub><sup>2-</sup>",                      "correct": false},
                {"option": "HPO<sub>4</sub><sup>2-</sup>",                      "correct": false},
                {"option": "Hg<span class='supsub'>2<br/>2</span><sup>+</sup>", "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Nice job.</p><br>",
            "incorrect": "<p><span>That's incorrect.</span> The answer is Hg<span class='supsub'>2<br/>2</span><sup>+</sup></p><br>" // no comma here
        }
    ]
};
