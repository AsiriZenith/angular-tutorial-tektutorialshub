import { Component } from "@angular/core";
import { Customer } from "./Customer";

@Component({
    selector: 'eventemitter-parent',
    templateUrl: 'eventemitter.lesson.component.html'
})
export class EventemitterParentComponent {

    customers: Customer[] = [

        { customerNo: 1, name: 'Rahuld Dravid', address: '', city: 'Banglaore', state: 'Karnataka', country: 'India' },
        { customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India' },
        { customerNo: 3, name: 'Saurrav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India' },
        { customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India' },
        { customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India' },

    ]

    selectedCustomer: Customer = new Customer();

    showDetails(customer: Customer) {
        this.selectedCustomer = Object.assign({}, customer)
    }

    update(customer: Customer) {
        console.log(customer)
        var cust = this.customers.find(e => e.customerNo == customer.customerNo)
        Object.assign(cust, customer)
        alert("Customer Saved")
    }
}