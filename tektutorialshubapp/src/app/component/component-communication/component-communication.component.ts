import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'communication-parent',
    templateUrl: './component-communication.component.html'
})

export class CommunicationComponent implements OnInit {

    // title = 'Component Interaction';
    Counter = 5;

    ngOnInit(): void {
    }

    increment() {
        this.Counter++;
    }
    decrement() {
        this.Counter--;
    }


    title = 'ngOnChanges';
    message = '';
    // customer!:Customer;
    customer: Customer = {
        code: 0,
        name: ''
    };
    name = '';
    code = 0;

    updateCustomer() {
        this.customer.name = this.name;
        this.customer.code = this.code;
    }
}

export interface Customer {
    code: number;
    name: string;
}