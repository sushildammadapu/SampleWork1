import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from './search-service.service';
import { ActivatedRoute,Params } from '@angular/router';
@Component({
  templateUrl: './search-cmp.component.html',
  styleUrls: ['./search-cmp.component.css']
})
export class SearchCmpComponent implements OnInit {
  profile:object;
  profileCount:number;
  constructor(private serchService:SearchServiceService, private r:ActivatedRoute) { 
  }

  ngOnInit() {
     this.r.params.subscribe((params: Params) => {
      console.log(params); 
     
 });
  }

  getUser(name)
  {
    console.log(name.titleInput);
     this.serchService.getUSer(name.titleInput).subscribe(data=>this.profile=data);
    
  }

 

}
 
