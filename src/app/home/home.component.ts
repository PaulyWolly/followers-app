import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Followers Application';
  subtitle = 'Followers of Mash Hamedani on Youtube';

  constructor() { }

  ngOnInit() {
  }

}
