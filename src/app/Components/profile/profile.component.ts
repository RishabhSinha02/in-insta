import { Component, Input, OnInit } from '@angular/core';
import { InstagramService } from 'src/app/services/instagram.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() username!: string

  profileFetching: boolean = false

  data : any
  repos: any
  
  constructor(private user: InstagramService ) { }

  ngOnInit(): void {
    this.dataList();
  }
  


  dataList():void{
    this.user.getData(this.username).subscribe({
      next:(response) =>{
        this.data = response;
        console.log(this.data)
        this.profileFetching = false;
      },
      error: (err) => {
        this.profileFetching = true;
      },
    });
  }

}

