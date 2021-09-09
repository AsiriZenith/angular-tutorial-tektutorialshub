import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { gte } from "../../utils/gte.validator";

@Component({
    selector: 'custome-validator',
    templateUrl: './custom-validator.component.html'
})
export class CustomValidatorComponent {

    constructor() {
    }

    myForm = new FormGroup({
        numVal: new FormControl('', [gte]),
        name: new FormControl('')
    })

    get numVal() {
        return this.myForm.get('numVal');
    }

    onSubmit() {
        console.log(this.myForm.value);
    }
}