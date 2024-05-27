import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { TrainService } from '../train.service';
import { Router } from '@angular/router';

export class UserLogin {
  email:string;
  password:string;

  constructor(){
    this.email='';
    this.password='';
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  ngOnInit():void{
  }

  //validations
  contactForm = new FormGroup({
    password : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email])
  })

  user: UserLogin;

  constructor(private trainService: TrainService, private route: Router) {
    this.user = new UserLogin;
  }



    loginUser(){
        this.trainService.userExist({"email": this.user.email,"password": this.user.password}).subscribe(
          (data: any) => {
            localStorage.setItem('role','data.passenger.role');
            localStorage.setItem('token','data.token');
            var role = localStorage.getItem('role');
            console.log(data);
            if(data.message === 'User login was successful'){
              if(data.passenger.role === 'USER'){
                localStorage.setItem("id",data.passenger.id);
                localStorage.setItem("name",data.passenger.name)
                alert("Login successfull");
                this.route.navigate(["/home"]);
              }
              else{
                alert("Login successfull");
                this.route.navigate(["/admin"]);
              }
            
            }
            else{
              alert("Invalid Credentials");
            }
          }
        )
        }
     
    }
