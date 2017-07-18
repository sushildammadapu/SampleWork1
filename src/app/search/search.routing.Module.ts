import {ModuleWithProviders,NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { SearchCmpComponent } from './search-cmp.component';
import { UserDetailsComponent } from './user-details.component';

const searchApproutes: Routes =[
 {path: '',component: SearchCmpComponent},
 {path: ':user',component: UserDetailsComponent}]
export const searchrouting: ModuleWithProviders = RouterModule.forChild(searchApproutes);

