import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent {
 userName="";
 errorAge="";
 errorName="";
  userAge:any;

  @Output() formEvent = new EventEmitter();
  get ageValid(){
   return this.userAge<20 && this.userAge>11;
  }
  get NameValid(){
    return this.userName.length >3;
   }
  passData(){
    if(this.ageValid&& this.NameValid){
      this.formEvent.emit({name:this.userName,age:this.userAge});
    }
    else{
      this.errorName="name must grater than 3";
      this.errorAge="11<age<20";
    }
  }

}
