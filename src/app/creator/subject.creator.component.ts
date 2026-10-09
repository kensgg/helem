import { Component, OnInit } from '@angular/core';
import { ISubject } from '../structure/subject';


@Component({
    selector: 'creator',
    templateUrl: 'subject.creator.component.html'
})

export class SubjectCreatorComponent implements OnInit {
    public subject: ISubject = { name: '' };
    ngOnInit(): void {
    }
    save() {
        console.log(this.subject)
    }
}