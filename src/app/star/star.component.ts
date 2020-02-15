import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  starwidth:number;
  @Input() aval;
  constructor() { }

  ngOnChanges() {
    this.starwidth = this.aval * 74/5
  }

}
