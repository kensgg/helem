import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-home',
  template: 'home.component.html'
})
export class HomeComponent implements OnInit {
  public message = `Angular Universal`;

  constructor(
    private lists : ListService
  ) {}
  ngOnInit(): void{}
}
