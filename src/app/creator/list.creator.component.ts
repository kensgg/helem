import { Component, OnInit } from '@angular/core';
import { IList } from '../structure/list';
import { ListService } from '../service/list.service';


@Component({
    selector: 'creator',
    templateUrl: 'list.creator.component.html'
})

export class ListCreatorComponent implements OnInit {
    public list: IList = {
        title: '',
        description: ''
    };

    constructor(private listService: ListService) { }
    ngOnInit(): void {
    }
    save() {
        this.listService.add(this.list).then(console.log);
    }
}