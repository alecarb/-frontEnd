import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { TokenService } from './service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private tokenService: TokenService) {}

  canActivate(oute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     // Verificar si el usuario tiene el rol de admin
     if (this.tokenService.getAuthorities().includes('ROLE_ADMIN')) {
      return true;
    } else {
      // Redirigir al usuario a la página de inicio si no es admin
      this.router.navigate(['/']);
      return false;    }
    }
}