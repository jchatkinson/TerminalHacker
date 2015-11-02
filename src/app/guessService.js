/**
 * Created by Jeremy on 11/1/2015.
 */
var GuessModel = (function () {
    function GuessModel(word, matches, access) {
        if (word === void 0) { word = ""; }
        if (matches === void 0) { matches = 0; }
        if (access === void 0) { access = ""; }
        this.word = word;
        this.matches = matches;
        this.access = access;
        this.status = "started";
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
    return GuessService;
})();
exports.GuessService = GuessService;
//# sourceMappingURL=guessService.js.map