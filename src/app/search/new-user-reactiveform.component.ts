import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Form, FormGroup,FormControl,FormBuilder,ReactiveFormsModule,Validators} from '@angular/forms'
@Component({
  selector: 'user1-cmp',
  templateUrl: './new-user-reactiveform.component.html'
})

export class newUserComponent implements OnInit  { 
 prfForm:FormGroup;
constructor(private rtr: Router,private fb: FormBuilder) {
}
ngOnInit() {

   this.prfForm = this.fb.group({
       userName: '',
       userAddress: '',
       location:this.fb.group({
              userLocation: '',
              userState:'',
              city:'' ,
              zipCode: ''
              }),
        userComments: ''
    });
    
  }

cancelOut()
  {
    this.rtr.navigate(['/searchuser']);
  }
saveForm(values)
  {
     console.log(values)
  }

}