import { AbstractControl, ValidationErrors } from '@angular/forms'

export function gte(control: AbstractControl): ValidationErrors | null {

    const v = control.value;

    if (isNaN(v)) {
        return { 'gtea': true }
    }

    if (v <= 10) {
        return { 'gte': true, 'requiredValue': 10 }
    }

    return null

}