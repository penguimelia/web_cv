import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  places: Array<Experience>;

  constructor() {
    this.places = [
      new Experience(
        "assets/images/accenture.svg",
        "Accenture",
        "Technology Placement",
        "London, Jul 2017 - 2018",
        "lkahds"
      ),
      new Experience(
        "assets/images/vhub.png",
        "Volleyball Hub",
        "Digital Marketing Associate",
        "Remote, from Sep 2017",
        "sdf"
      ),
      new Experience(
        "assets/images/ttp.png",
        "To The Point Pte Ltd",
        "Work Experience",
        "Singapore, August 2015",
        "das"
      ),
      new Experience(
        "assets/images/uom.png",
        "School of Computer Science",
        "Student Ambassador",
        "Manchester, Sep 2016 - 2017",
        "ads"
      )
    ]
  }

  ngOnInit() {
  }

}
