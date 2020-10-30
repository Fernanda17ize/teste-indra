import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  backgroundfirst:string = "assets/img/mulher-feliz.jpg";
  constructor() { }
  ngOnInit(): void {
  }
}
