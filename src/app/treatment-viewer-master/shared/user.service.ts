import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name = 'ulli'
  userType = 1
  constructor() {
    this.name = 'ulli';
    this.userType = 1;
  }
  getName() {
    return this.name;
  }
  setName(name){
    this.name = name;
  }
  getUserType() {
    return this.userType;
  }
  setTypeDoctor(){
    this.userType = 1;
  }
  setTypePlanner() {
    this.userType = 2;
  }
}
