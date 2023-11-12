import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {of, tap} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import {AuthentificationService} from "../authentifcation.service";

export const loginGuard: CanActivateFn = (route, state) => {
    const authService : AuthentificationService = inject(AuthentificationService)
    const router : Router = inject(Router);

    return authService.user$.pipe(
        tap(user => {
            if (user) {
                router.navigate(['cv']);
            }
        }),
        map(user => !user),
        catchError((error) => {
            console.error('Error in loginGuard', error);
            return of(false);
        })
    )
};
