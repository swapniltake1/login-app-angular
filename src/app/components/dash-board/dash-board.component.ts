import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/Services/userservice.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {

  user:any
  constructor(private userService:UserserviceService){}

  getUser()
  {
    this.userService.getUser().subscribe(
      user=>{
        console.log(user);
        this.user=user;
        
      },
      error=>{
        console.log(error);
        
      }
    )
  }

}
