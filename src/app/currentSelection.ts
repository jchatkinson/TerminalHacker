/* Created by Jeremy on 11/2/2015. */

import {Component, View} from "angular2/angular2";

@Component({
    selector: 'current-selection'
})
@View({
    template: `<div> >{{word}} </div>`,
})
export class CurrentSelection {
    word:string;

    constructor(){
        this.word = "";
    }

}