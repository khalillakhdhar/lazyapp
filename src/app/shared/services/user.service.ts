import { Injectable } from '@angular/core';
import { Utilisateur } from '../classes/utilisateur';

@Injectable({
  providedIn: 'root'
})
// injectable (il y'a une D.I) appel de l'instance sans new et dans les paramétres du constructeur
export class UserService {
  users:Utilisateur[]=[]
  currentuser:any;

  constructor() { }

addOneUser(user:Utilisateur)
{
  this.users.push(user);
  console.log("ajouté",user)
  console.table(this.users)
  return user;
}
getCurrentUser(id:number)
{
  return this.users[id];
}
getAllUsers()
{
  console.table(this.users);
  return this.users;
}
login(email:string, password:string)
{
  this.currentuser=null;
 this.users.forEach((user) =>{
  if(user.email==email&& password==user.password)
  {
    this.currentuser=user;
    console.log(this.currentuser)
  }
  
 })
 console.log(this.currentuser)
 return this.currentuser;
 
}
deleteOneUser( indice:number)
{
  this.users.splice(indice,1);
  console.log("supprimé",this.users);
}

}
