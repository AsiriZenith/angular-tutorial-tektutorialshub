import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { Customer } from "../component-communication.component";

@Component({
    selector: 'child-component',
    templateUrl: './child.component.html'
})

export class ChildComponent implements OnInit {

    @Input() count: number | undefined;

    ngOnInit(): void {
    }

    code: String | undefined;
    neme: String | undefined;

    @Input() message: string | undefined;
    @Input() customer: Customer | undefined;
    changelog: string[] = [];

    ngOnChanges(changes: SimpleChanges) {
        console.log('OnChanges');
        console.log(JSON.stringify(changes));
 
        // tslint:disable-next-line:forin
        for (const propName in changes) {
             const change = changes[propName];
             const to  = JSON.stringify(change.currentValue);
             const from = JSON.stringify(change.previousValue);
             const changeLog = `${propName}: changed from ${from} to ${to} `;
             this.changelog.push(changeLog);
        }
    }
}

