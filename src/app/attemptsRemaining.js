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
var guessService_1 = require('./guessService');
var AttemptsRemaining = (function () {
    function AttemptsRemaining(guessService) {
        this.numGuesses = guessService.guesses.length;
        this.attemptsRemaining = 4 - this.numGuesses;
    }
    AttemptsRemaining = __decorate([
        angular2_1.Component({
            selector: 'attempts-remaining'
        }),
        angular2_1.View({
            directives: [angular2_1.NgIf],
            template: "\n        <div>{{ attemptsRemaining }} Attempt(s) Remaining:\n            <span *ng-if=\"attemptsRemaining>0\">&#9632</span>\n            <span *ng-if=\"attemptsRemaining>1\">&#9632</span>\n            <span *ng-if=\"attemptsRemaining>2\">&#9632</span>\n            <span *ng-if=\"attemptsRemaining>3\">&#9632</span>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [guessService_1.GuessService])
    ], AttemptsRemaining);
    return AttemptsRemaining;
})();
exports.AttemptsRemaining = AttemptsRemaining;
//# sourceMappingURL=attemptsRemaining.js.map