/* Created by Jeremy on 11/1/2015. */

import {Component, View,NgFor} from "angular2/angular2";
import {GuessService} from "./guessService";

@Component({
    selector: 'guess-list'
})
@View({
    directives: [NgFor],
    template: `
        <div>
            <p>PREVIOUS ATTEMPTS:</p>
            <div *ng-for="#guess of guessService.guesses">
                <div> >{{guess.word}}</div>
                <div> >>>ACCESS {{guess.access}}.</div>
                <div> >>>{{guess.matches}}/{{guess.word.length}} CORRECT.</div>
            </div>
        </div> `
})

export class GuessList {
    constructor(
        public guessService:GuessService
    ){}
}