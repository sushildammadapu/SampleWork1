import {ModuleWithProviders,NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {SearchCmpComponent} from './search/search-cmp.component';
import { UserComponent } from './search/new-user.component';
import { newUserComponent } from './search/new-user-reactiveform.component';
const appRoutes: Routes =[
{path:'',redirectTo:'searchuser',pathMatch:'full'},
{path: 'searchuser',loadChildren: 'app/search/search-module#searchModule'},
{path: 'home',loadChildren: 'app/search/search-module#searchModule'},
{path:'about',component:UserComponent},
{path: '**',redirectTo: '/searchuser',pathMatch: 'full'}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);