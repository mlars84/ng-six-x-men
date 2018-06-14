import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HereosComponent implements OnInit {
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
