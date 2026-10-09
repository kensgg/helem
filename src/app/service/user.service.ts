import { Injectable } from "@angular/core";
import { IUsers } from "../structure/users";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";

@Injectable()
export class UserServices{
    private users : AngularFirestoreCollection<IUsers>;
    constructor(private afs: AngularFirestore){
        this.users = afs.collection<IUsers>('users');
    }
    add(user:IUsers): Promise<void>{
        return this.users.doc(user.uid).set(user);
    }
}