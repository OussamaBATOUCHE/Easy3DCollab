import { Component, OnInit } from '@angular/core';
import {UserService} from '../treatment-viewer-master/shared/user.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  nameForm = new FormControl('')
  checkboxForm = new FormControl('')
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.userService.setName(this.nameForm.value);
    this.userService.userType = (<number> (<unknown> this.checkboxForm.value))*1
    console.log(this.userService.userType)
  }
}
