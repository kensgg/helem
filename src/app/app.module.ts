import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { router } from './routers'

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './Welcome/welcome.component';
import { ListCreatorComponent } from './creator/list.creator.component';

import { AuthGuard } from './guards/auth.guard.services';

import { UserServices } from './service/user.service';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './base/app.component';
import { HomeComponent } from './home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { authServices } from './service/auth.services';

import { FormsModule } from '@angular/forms';
import { ListService } from './service/list.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    WelcomeComponent,
    ListCreatorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    RouterModule.forRoot(router),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    TransferHttpCacheModule,
    FormsModule
  ],
  providers: [authServices, AuthGuard, UserServices, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
