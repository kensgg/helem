import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { WelcomeComponent } from './Welcome/welcome.component'
import { AuthGuard } from './guards/auth.guard.services'
import { ListCreatorComponent } from './creator/list.creator.component'
import { CanActivate } from '@angular/router/src/utils/preactivation'
export const router =
  [
    { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'Welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
    { path: 'new', component: ListCreatorComponent, canActivate: [AuthGuard] },
  ]