import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component-lesson/component.lesson.component';
import { ChildComponent } from './component/component-communication/child.component/child.component';
import { EventemitterParentComponent } from './component/eventemitter-lesson/eventemitter.lesson.component';
import { ValidationComponent } from './component/reactive-forms-validation.lesson/reactive-forms-validation';
import { CommunicationComponent } from './component/component-communication/component-communication.component';
import { EventemitterChildComponent } from './component/eventemitter-lesson/eventemitter-child/eventemitter-child.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ComponentComponent,
    ValidationComponent,
    CommunicationComponent,
    EventemitterChildComponent,
    EventemitterParentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
