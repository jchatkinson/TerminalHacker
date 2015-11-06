/* Created by Jeremy on 11/1/2015. */

import {Component, View, NgFor} from "angular2/angular2";
import {HashService} from "./hashService";

@Component({
    selector: 'hash-codes'
})
@View({
    directives: [NgFor],
    template:
        `<div *ng-for="#hash of hashService.hash">{{hash}}</div>`
})

export class HashCodes {
    constructor(
        public hashService:HashService
    ){
        //console.log(hashService);
    }
}