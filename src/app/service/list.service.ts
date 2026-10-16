import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { authServices } from "./auth.services";
import { IList } from "../structure/list";
import * as firebase from "firebase";
import { map } from "rxjs/operators";

@Injectable()
export class ListService {
    public uid!: string;
    public listCollection!: AngularFirestoreCollection<IList>;
    public list!: Observable<IList[]>;

    constructor(public afs: AngularFirestore, private auth: authServices) {
        this.auth.getUser().subscribe(user => {
            this.uid = user.uid;

            if (this.uid) this.setCollection();
        });
    }

    setCollection() {
        this.listCollection = this.afs.collection('users').doc(this.uid).collection<IList>('lists');
        this.list = this.listCollection.snapshotChanges().pipe(
            map(actions => actions.map(item => {
                const data = item.payload.doc.data() as IList;
                const id = item.payload.doc.id;

                return { ...data, id };
            }))
        );
    }

    add(list: IList): Promise<any> {
        if (!this.listCollection) throw Error('Asignar un valor a la coleccion antes de tratar de guardar un nuevo documento');
        const createdAt = firebase.firestore.FieldValue.serverTimestamp();

        list.createdAt = createdAt;
        return this.listCollection.add(list);
    }
}
