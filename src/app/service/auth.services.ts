import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { from, Observable } from 'rxjs';
import {map, take, filter} from "rxjs/operators";
import { IUsers } from '../structure/users';

@Injectable({
    providedIn: 'root'
})
export class authServices {
    constructor(private afAuth: AngularFireAuth) { }

    getUser() : Observable<IUsers>{
        return this.afAuth.authState.pipe(
            take(1),
            filter(user => !! user),
            map((user => user as IUsers))
        )
    }
    login(): Promise<void> {
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
            .then(result => {
                console.log(result);
            }).catch(console.log);
    }
}