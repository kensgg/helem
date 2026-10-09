import {Component} from '@angular/core';
import { Route, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.components.html',
  styles: []
})
export class AppComponent {
  constructor(public afAuth : AngularFireAuth, private router: Router){}
    logout(){
      this.afAuth.auth.signOut().then(()=>{
        this.router.navigate(['/login'])
      })
    }

}
