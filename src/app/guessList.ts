/* Created by Jeremy on 11/1/2015. */

import {Component, View,NgFor} from "angular2/angular2";
import {GuessService} from "./guessService";

@Component({
    selector: 'guess-list',
})
@View({
    directives: [NgFor],
    template: `<p>PREVIOUS ATTEMPTS:</p>
<div *ng-for="#guess of guessService.guesses" class="guess">
    >{{guess.word}} <br>
    >>>ACCESS {{guess.access}}. <br>
    >>>{{guess.correctLetters}}/{{guess.word.length}} CORRECT.
</div>`

})

export class GuessList {

    constructor(public guessService:GuessService){

    }
}