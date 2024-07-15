import { Component } from '@angular/core';
import { Utilisateur } from '../../shared/classes/utilisateur';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
utilisateur={} as Utilisateur;
constructor(private userService:UserService) // injection de la dépendence userService
{}
addOne()
{

  this.userService.addOneUser(this.utilisateur);
 
}
}
