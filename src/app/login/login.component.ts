import {Component, inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { tap } from 'rxjs/operators';
import {LoginData} from "./model/LoginData";
import {AuthentificationService} from "../authentifcation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService : AuthentificationService = inject(AuthentificationService)
  constructor() { }

  router : Router = inject(Router);
  showError = false
  login(formulaire : NgForm){

    const data : LoginData = new LoginData(formulaire.form.value.email, formulaire.form.value.password)
    //pipe prend un observable et retourne un observable
    this.authService.login(data).pipe(
      tap((authenticated)=>{
        // it allows you to peek into the observable stream and do something with the values passed through without altering them.
        // It's like being able to look at the cards in a card game as they are dealt, without changing the order or the game itself.
        if(authenticated){
          alert("Vous êtes authentifié !")
          this.router.navigate(['cv']);
        }else{
          this.showError = true
        }
      })
    ).subscribe()
    // We can implement the previous code using inside the subscribe method

  }
}
