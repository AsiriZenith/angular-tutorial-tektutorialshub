import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Customer } from "../Customer";

@Component({
    selector: 'eventemitter-child',
    templateUrl: './eventemitter-child.component.html'
})
export class EventemitterChildComponent {

    @Input() customer:Customer = new Customer();
    @Output() customerChange: EventEmitter<Customer> = new EventEmitter<Customer>();

    update() {
        this.customerChange.emit(this.customer);
    }
}