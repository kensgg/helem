import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { WelcomeComponent } from './Welcome/welcome.component'
export const router =
  [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'Welcome', component: WelcomeComponent}
  ]