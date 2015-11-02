/* Created by Jeremy on 11/1/2015. */

import {Component, View} from "angular2/angular2";
import {GuessService} from "./guessService";

@Component({
    selector: 'guess-list'
})
@View({
    template: `
        <p>this is my list of guesses</p>
    `
})

export class GuessList {
    constructor(
        public guessService:GuessService
    ){}
}