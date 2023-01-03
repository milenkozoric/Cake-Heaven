import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { CakesService } from 'src/app/service/cakes.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User= new User();

  newUser: User = new User();

  editMode= false;

  constructor(private service: CakesService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe({
      next:(user: User)=>{
        this.user= user;
        this.newUser = new User (this.user);
        console.log(user);
        
      }
    })
  }

  onEditClicked() {
    this.editMode = true;
  }

  onEditOk() {
    console.log(this.newUser)
    this.service.updateUser(this.newUser).subscribe((user: User) => {
      console.log(user)
      this.user = user;
      this.newUser = new User(this.user);
      this.editMode = false;
    })
  }

  onEditCancel() {
    this.editMode = false;
    this.newUser = new User(this.user);
  }


}
