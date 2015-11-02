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
var attemptsRemaining_1 = require("./attemptsRemaining");
var guessList_1 = require("./guessList");
var powerButton_1 = require("./powerButton");
var hashCodes_1 = require("./hashCodes");
var AppComponent = (function () {
    function AppComponent(wordService) {
        this.wordService = wordService;
        console.log(wordService);
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            directives: [angular2_1.CORE_DIRECTIVES, attemptsRemaining_1.AttemptsRemaining, guessList_1.GuessList, powerButton_1.PowerButton, hashCodes_1.HashCodes],
            template: "<div class=\"terminal\">\n                    <h1>ROBOCO INDUSTRIES (TM) TERMILINK PROTOCOL</h1>\n                    <h4>!!! WARNING: LOCKOUT IMMINENT !!!</h4>\n                    <attempts-remaining></attempts-remaining>\n                    <div class=\"hack\">\n                        <hash-codes></hash-codes>\n                        <selectable-text></selectable-text>\n                        <hash-codes></hash-codes>\n                        <selectable-text></selectable-text>\n                        <guess-list></guess-list>\n                        <current-selection></current-selection>\n                    </div>\n                    <power-button></power-button>\n                </div>",
            styles: ["\n        .terminal {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-around;\n            align-items: flex-start;\n        }\n        .terminal .hack {\n            width: 100%;\n            flex: 1 1 auto;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-around;\n            align-items: flex-start;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [wordService_1.WordService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [wordService_1.WordService, guessService_1.GuessService]);
//# sourceMappingURL=app.js.map