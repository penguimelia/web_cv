import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  @Input() smallSrc: string;
  @Input() largeSrc: string;
  @Input() altText: string;

  largeHidden: boolean;

  constructor() {
    this.largeHidden = true;
  }

  display() {
    this.largeHidden = false;
  }

}
