import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: any;
  repeatPass: string = 'none';

  constructor() { }

  ngOnInit(): void {
  }
registerForm = new FormGroup({
  FirstName: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z].*"), Validators.minLength(3)]),
  middleName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
  lastName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
  course: new FormControl(""),
  gender: new FormControl("", [Validators.required]),
  phone: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10),Validators.maxLength(10)]),
  address: new FormControl(""),
  email: new FormControl("", [Validators.required, Validators.email]),
  pwd: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
  rpwd: new FormControl("",)
});



registerSubmited(){
  if(this.PWD.value == this.RPWD.value){
    console.log("Submited");
    
  }else{
    this.repeatPass = 'inline'
  }

  // console.log(this.registerForm.get("firstName"));
  
  
}


public get FirstName() : FormControl {
  return this.registerForm.get("FirstName") as FormControl;
}
public get middleName() : FormControl {
  return this.registerForm.get("middleName") as FormControl;
}
public get lastName() : FormControl {
  return this.registerForm.get("lastName") as FormControl;
}
public get Email() : FormControl {
  return this.registerForm.get("email") as FormControl;
}
public get phone() : FormControl {
  return this.registerForm.get("phone") as FormControl;
}
public get Gender() : FormControl {
  return this.registerForm.get("gender") as FormControl;
}
public get PWD() : FormControl {
  return this.registerForm.get("pwd") as FormControl;
}
public get RPWD() : FormControl {
  return this.registerForm.get("rpwd") as FormControl;
}



}