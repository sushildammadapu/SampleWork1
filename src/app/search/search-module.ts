import {CommonModule  } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SearchCmpComponent } from './search-cmp.component';
import {SearchServiceService} from './search-service.service';
import { UserDetailsComponent } from './user-details.component'
import {searchrouting} from './search.routing.Module';
@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    searchrouting
  ],
  declarations: [
    SearchCmpComponent,
    UserDetailsComponent
  ],
  providers: [
  SearchServiceService
  ]
})
export class searchModule { }

