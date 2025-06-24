import authService from '../Services/auth.service';

const authGuard=authService.isUserLoggedIn();//returns a boolean 

//permitted roles me se 
const permit = (...permittedRoles: ('user' | 'admin')[]) => () => !!permittedRoles.find(r => r === authService.getLoggedInRole()); 

export const GUARDS = {
    authGuard,
    permit
}
