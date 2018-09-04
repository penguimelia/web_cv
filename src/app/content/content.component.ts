import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {
  selectedTab: string;
  tabs: Array<string>;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.selectedTab = '';
    }
  }

  constructor(private eRef: ElementRef) {
    this.selectedTab = '';
    this.tabs = ['About Me', 'Experience', 'Education', '???'];
  }

  setTab(tab) {
    if (this.selectedTab !== tab) {
      this.selectedTab = tab;
    }
  }
}
