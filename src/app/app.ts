/*Created by Jeremy on 10/24/2015.*/
import {bootstrap,Component,View,CORE_DIRECTIVES} from 'angular2/angular2';
import {WordService} from "./wordService";
import {GuessService} from "./guessService";
import {AttemptsRemaining} from "./attemptsRemaining";
import {GuessList} from "./guessList";
import {PowerButton} from "./powerButton";
import {HashCodes} from "./hashCodes";

@Component({
    selector: 'my-app'
})
@View({
    directives: [CORE_DIRECTIVES,AttemptsRemaining,GuessList,PowerButton,HashCodes],
    template: `<div class="terminal">
                    <h1>ROBOCO INDUSTRIES (TM) TERMILINK PROTOCOL</h1>
                    <h4>!!! WARNING: LOCKOUT IMMINENT !!!</h4>
                    <attempts-remaining></attempts-remaining>
                    <div class="hack">
                        <hash-codes></hash-codes>
                        <selectable-text></selectable-text>
                        <hash-codes></hash-codes>
                        <selectable-text></selectable-text>
                        <guess-list></guess-list>
                        <current-selection></current-selection>
                    </div>
                    <power-button></power-button>
                </div>`,
    styles:[`
        .terminal {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
        }
        .terminal .hack {
            width: 100%;
            flex: 1 1 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-start;
        }
    `]
})

class AppComponent {
    constructor(
        public wordService:WordService
    ){
        console.log(wordService);
    }
}

bootstrap(AppComponent,[WordService,GuessService]);