import { Component, OnInit } from '@angular/core';
import { IList } from '../structure/list';


@Component({
    selector: 'creator',
    templateUrl: 'list.creator.component.html'
})

export class ListCreatorComponent implements OnInit {
    public list: IList = { title: '' };
    ngOnInit(): void {
    }
    save() {
        console.log(this.list)
    }
}