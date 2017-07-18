import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserComponent } from './search/new-user.component';
import { newUserComponent } from './search/new-user-reactiveform.component';
import { AppComponent } from './app.component';
import {routing} from './app.router';
@NgModule({
  declarations: [
    AppComponent,
   UserComponent,
    newUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
