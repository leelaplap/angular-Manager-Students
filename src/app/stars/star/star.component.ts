import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() star: number;
  widthStar;
  @Output() message = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.widthStar = this.star * 75 / 5;
  }

  click() {
    return this.message.emit('Độ xinh đẹp được đánh giá ' + this.star + ' sao');
  }

}
