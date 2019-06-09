import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../profile.service';

@Component({
  selector: 'app-search-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class ProfileServiceComponent implements OnInit {
    profile: any;
    repos: any;
    username: string;

  constructor(private profileService: ProfileService) {
    
   }

   findProfile(){
     this.profileService.updateProfile(this.username);
     this.profileService.getProfileDesc().subscribe(profile =>{
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos =>{
      this.repos = repos;
    })
   }

  ngOnInit() {
  }

}