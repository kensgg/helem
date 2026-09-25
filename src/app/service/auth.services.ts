import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class authServices {
    constructor(private afAuth: AngularFireAuth) { }

    login(): Promise<void> {
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
            .then(result => {
                console.log(result);
            }).catch(console.log);
    }
}