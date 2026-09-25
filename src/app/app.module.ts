import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {router} from './routers'

import{ environment } from '../environments/environment';
import { AngularFireModule} from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './Welcome/welcome.component';

import  {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth'; 
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(router),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
