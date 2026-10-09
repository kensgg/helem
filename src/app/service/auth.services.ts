import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { from, Observable } from 'rxjs';
import {map, take, filter} from "rxjs/operators";
import { IUsers } from '../structure/users';
import { UserServices } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class authServices {
    constructor(private afAuth: AngularFireAuth, private users:UserServices) { }

    getUser() : Observable<IUsers>{
        return this.afAuth.authState.pipe(
            take(1),
            filter(user => !! user),
            map((user => user as IUsers))
        )
    }
    login(): Promise<void> {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(result => {
                return this.users.add({uid: result.user!.uid, email: result.user!.email})
            }).catch(console.log);
    }
}