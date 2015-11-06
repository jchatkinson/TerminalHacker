/* Created by Jeremy on 11/1/2015. */

import {Component, View} from "angular2/angular2";

@Component({
    selector: 'power-button'
})
@View({
    template: `<a (click)="onClick($event)">Log Off</a>`
})

export class PowerButton {

    onClick(event){
        console.log("Power button clicked",event);
        window.history.back();
    }
}