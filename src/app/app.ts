/*Created by Jeremy on 10/24/2015.*/
import {bootstrap,Component,View,CORE_DIRECTIVES} from 'angular2/angular2';
import {WordService} from "./wordService";
import {GuessService} from "./guessService";
import {HashService} from "./hashService";
import {AttemptsRemaining} from "./attemptsRemaining";
import {GuessList} from "./guessList";
import {PowerButton} from "./powerButton";
import {HashCodes} from "./hashCodes";
import {CurrentSelection} from "./currentSelection";
import {ScrambledText} from "./scrambledText";

@Component({
    selector: 'terminal'
})
@View({
    directives: [CORE_DIRECTIVES,AttemptsRemaining,GuessList,PowerButton,HashCodes,CurrentSelection,ScrambledText],
    templateUrl: 'templates/terminal.html'
})

class Terminal {
    constructor(
        public wordService:WordService,
        public guessService:GuessService
    ){
        console.log("app started");
        console.log(wordService);
        console.log(guessService);
    }
}

bootstrap(Terminal,[WordService,GuessService,HashService]);