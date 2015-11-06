/* Created by Jeremy on 11/1/2015. */

import {Component, View, NgIf} from "angular2/angular2";
import {GuessService} from './guessService';

@Component({
    selector: 'attempts-remaining'
})
@View({
    directives: [NgIf],
    template: `
        <div>{{ attemptsRemaining }} Attempt(s) Remaining:
            <span *ng-if="attemptsRemaining>0">&#9632</span>
            <span *ng-if="attemptsRemaining>1">&#9632</span>
            <span *ng-if="attemptsRemaining>2">&#9632</span>
            <span *ng-if="attemptsRemaining>3">&#9632</span>
        </div>
    `
})
export class AttemptsRemaining {
    numGuesses:number;
    attemptsRemaining:number;
    constructor(guessService:GuessService){
        this.numGuesses = guessService.guesses.length;
        this.attemptsRemaining = 4 - this.numGuesses;
    }
}