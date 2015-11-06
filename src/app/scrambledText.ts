/* Created by Jeremy on 11/5/2015. */

import {Component, View,NgFor} from "angular2/angular2";

@Component({
    selector: 'scrambled-text'
})
@View({
    directives: [NgFor],
    template: `<div>some text</div>`
})

export class ScrambledText {

}