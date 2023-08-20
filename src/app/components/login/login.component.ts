import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService)
  {

  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    // console.log("form Submitted !!");

    if (
        (this.credentials.username !== '' && this.credentials.password !== '') &&
        (this.credentials.username !== null && this.credentials.password !== null)
    ) {
        console.log("we have to form submit on server !!");

        this.loginService.generateToken(this.credentials).subscribe(

          (response:any)=>{
            console.log(response.token);

            this.loginService.loginUser(response.token)
            window.location.href="/dashboard"
                   
          },
          error=>{
            console.log(error);
            
          }
        )
        
    } else {
        console.log("fields are empty !!");
    }
}

}
