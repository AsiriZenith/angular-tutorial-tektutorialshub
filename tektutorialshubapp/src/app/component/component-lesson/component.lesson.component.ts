import { Component } from "@angular/core";

@Component({
    selector: 'com-component',
    templateUrl: './component.lesson.component.html',
    styleUrls: ['./component.lesson.component.css']
})

export class ComponentComponent {

    /* Interpolation */
    firstName = 'Sachin'
    lastName = 'Tendulkar'

    /* Property Binding */
    title = "Angular Property Binding Example"
    isDisabled = false

    /* event binding */
    clickCount = 0
    clickMe() {
        this.clickCount++;
    }

    /* $event Payload */
    value = ""
    handleInput(event: Event) {
        this.value = (event.target as HTMLInputElement).value;
    }

    /* Template reference variable */
    val = "";
    handleInput1(element: any) {
        this.val = element.value;
    }

    /* Key event filtering (with keytype) */
    keytypevalue1 = ""

    /* Key event filtering (with keytype.enter) */
    keytypevalue2 = ""

    /* Two way using property & Event Binding */
    name = ""
    clearName() {
        this.name = "";
    }

    /* Two-way binding */
    twowayvalue = "";
    clearValue() {
        this.twowayvalue = "";
    }

    /* ngModelChange */
    nameChanged(arg: Event) {
        console.log("modelchanged " + arg);
    }

    email = ""

    /* ngModelChange with ngModel */
    _firstName = ""

    firstNameChanged(arg: Event) {
        console.log(
            "firstNameChanged  argument " + arg + "  component " + this._firstName
        );
    }

    /* Change Event */
    countries: Array<Country> = [
        { id: 1, name: 'Sri lanka' },
        { id: 2, name: 'India' }
    ]
    name1Changed(arg: any) {
        console.log("name1Changed " + arg.target.value);
        console.log(arg);
    }

    country1Changed(arg: any) {
        console.log("country1Changed " + arg.target.value);
        console.log(arg);
    }


}

export interface Country {
    id: number;
    name: string
}