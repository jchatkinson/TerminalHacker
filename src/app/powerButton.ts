/* Created by Jeremy on 11/1/2015. */

import {Component, View} from "angular2/angular2";

@Component({
    selector: 'power-button'
})
@View({
    template: `<div>
        <button (click)="onClick($event)">Power Off</button>
    </div>`
})

export class PowerButton {
    onClick(event){
        console.log("Power button clicked",event);
    }
}