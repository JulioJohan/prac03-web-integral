import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    console.log('Entre Home ')
  }

  cards: any [] = [
    {
      image: "assets/images/u2.webp",
      btn: "btn-danger",
    },
    {
      image: "assets/images/u3.webp",
      btn: "btn-warning",
    },
    {
      image: "assets/images/u4.webp",
      btn: "btn-info",
    },
  ]

}
