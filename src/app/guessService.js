/**
 * Created by Jeremy on 11/1/2015.
 */
var GuessModel = (function () {
    function GuessModel(word, correctLetters, access) {
        if (word === void 0) { word = ""; }
        if (correctLetters === void 0) { correctLetters = 0; }
        if (access === void 0) { access = "DENIED"; }
        this.word = word;
        this.correctLetters = correctLetters;
        this.access = access;
    }
    return GuessModel;
})();
exports.GuessModel = GuessModel;
var GuessService = (function () {
    function GuessService() {
        this.guesses = [
            new GuessModel("GUESS1", 0, "DENIED"),
            new GuessModel("GUESS2", 0, "DENIED"),
            new GuessModel("GUESS3", 0, "DENIED")
        ];
    }
    GuessService.prototype.addGuess = function (value) {
        this.guesses.push(value);
    };
    GuessService.prototype.resetGuesses = function () {
        this.guesses = [];
    };
    return GuessService;
})();
exports.GuessService = GuessService;
//# sourceMappingURL=guessService.js.map