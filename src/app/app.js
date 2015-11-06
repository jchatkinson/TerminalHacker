var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*Created by Jeremy on 10/24/2015.*/
var angular2_1 = require('angular2/angular2');
var wordService_1 = require("./wordService");
var guessService_1 = require("./guessService");
var hashService_1 = require("./hashService");
var attemptsRemaining_1 = require("./attemptsRemaining");
var guessList_1 = require("./guessList");
var powerButton_1 = require("./powerButton");
var hashCodes_1 = require("./hashCodes");
var currentSelection_1 = require("./currentSelection");
var scrambledText_1 = require("./scrambledText");
var Terminal = (function () {
    function Terminal(wordService, guessService) {
        this.wordService = wordService;
        this.guessService = guessService;
        console.log("app started");
        console.log(wordService);
        console.log(guessService);
    }
    Terminal = __decorate([
        angular2_1.Component({
            selector: 'terminal'
        }),
        angular2_1.View({
            directives: [angular2_1.CORE_DIRECTIVES, attemptsRemaining_1.AttemptsRemaining, guessList_1.GuessList, powerButton_1.PowerButton, hashCodes_1.HashCodes, currentSelection_1.CurrentSelection, scrambledText_1.ScrambledText],
            templateUrl: 'templates/terminal.html'
        }), 
        __metadata('design:paramtypes', [wordService_1.WordService, guessService_1.GuessService])
    ], Terminal);
    return Terminal;
})();
angular2_1.bootstrap(Terminal, [wordService_1.WordService, guessService_1.GuessService, hashService_1.HashService]);
//# sourceMappingURL=app.js.map