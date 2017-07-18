import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'user-cmp',
    templateUrl: './new-user.component.html',
})

export class UserComponent { 

constructor(private rtr: Router) {
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