import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../../shared/classes/utilisateur';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  utilisateur={} as Utilisateur;

  constructor(private userService:UserService, private route:Router){


  }
  login()
  {
    if(this.userService.login(this.utilisateur.email,this.utilisateur.password)!=null )
      this.route.navigate(['../dashboard'])
    else
    alert("utilisateur inconnu!")
  }

}
