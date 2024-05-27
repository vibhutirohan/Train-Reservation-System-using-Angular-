import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  var r = localStorage.getItem('role');
  var token = localStorage.getItem('token');
  if(token!==null){
    if(r === 'ADMIN'){
      return true;
    }
    else if(r === 'USER'){
      return true;
    }
  }
  else{
    router.navigateByUrl('login')
    return false;
  }
  
}

