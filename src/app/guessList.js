/* Created by Jeremy on 11/1/2015. */
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
var angular2_1 = require("angular2/angular2");
var guessService_1 = require("./guessService");
var GuessList = (function () {
    function GuessList(guessService) {
        this.guessService = guessService;
    }
    GuessList = __decorate([
        angular2_1.Component({
            selector: 'guess-list',
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            template: "<p>PREVIOUS ATTEMPTS:</p>\n<div *ng-for=\"#guess of guessService.guesses\" class=\"guess\">\n    >{{guess.word}} <br>\n    >>>ACCESS {{guess.access}}. <br>\n    >>>{{guess.correctLetters}}/{{guess.word.length}} CORRECT.\n</div>"
        }), 
        __metadata('design:paramtypes', [guessService_1.GuessService])
    ], GuessList);
    return GuessList;
})();
exports.GuessList = GuessList;
//# sourceMappingURL=guessList.js.map