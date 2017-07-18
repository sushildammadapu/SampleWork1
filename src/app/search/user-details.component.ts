import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import {Http,Response,RequestOptions,URLSearchParams,Headers} from '@angular/http';
import {SearchServiceService} from './search-service.service';
@Component({
  selector:'user-data',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 userLogin:string;
 userData: Object = {};
constructor(private route: ActivatedRoute,public http: Http,private serchService:SearchServiceService) {

  }

  ngOnInit() {
 this.route.params.subscribe((params: Params) => {
      console.log(params.user); 
      this.userLogin=params.user;
     });
     this.serchService.GetUserDetails(this.userLogin).subscribe(data=>this.userData=data);
  }
  

}
