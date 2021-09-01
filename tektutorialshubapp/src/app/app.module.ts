import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentComponent } from './component/component-lesson/component.lesson.component';
import { ChildComponent } from './component/component-communication/child.component/child.component';
import { EventemitterParentComponent } from './component/eventemitter-lesson/eventemitter.lesson.component';
import { CommunicationComponent } from './component/component-communication/component-communication.component';
import { EventemitterChildComponent } from './component/eventemitter-lesson/eventemitter-child/eventemitter-child.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ComponentComponent,
    CommunicationComponent,
    EventemitterChildComponent,
    EventemitterParentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
