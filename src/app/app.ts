/*Created by Jeremy on 10/24/2015.*/
import {bootstrap,Component,View,CORE_DIRECTIVES} from 'angular2/angular2';
import {WordService} from "./wordService";
import {GuessService} from "./guessService";
import {AttemptsRemaining} from "./attemptsRemaining";
import {GuessList} from "./guessList";

@Component({
    selector: 'my-app'
})
@View({
    directives: [CORE_DIRECTIVES,AttemptsRemaining,GuessList],
    template: `<div>
                    <h1>ROBOCO INDUSTRIES (TM) TERMILINK PROTOCOL</h1>
                    <h4>!!! WARNING: LOCKOUT IMMINENT !!!</h4>
                    <attempts-remaining></attempts-remaining>
                    <div>
                        <hash-codes></hash-codes>
                        <selectable-text></selectable-text>
                        <hash-codes></hash-codes>
                        <selectable-text></selectable-text>
                        <guess-list></guess-list>
                        <current-selection></current-selection>
                    </div>
                    <power-button></power-button>
                </div>`
})

class AppComponent {
    constructor(
        public wordService:WordService
    ){
        console.log(wordService);
    }
}

bootstrap(AppComponent,[WordService,GuessService]);