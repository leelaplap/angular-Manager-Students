import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() star: number;
  widthStar;

  constructor() {
  }

  ngOnInit() {
    this.widthStar = this.star * 75 / 5;
  }

}
