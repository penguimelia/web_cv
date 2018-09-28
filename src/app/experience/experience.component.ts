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
        "This internship was a great introduction into the consulting industry and allowed me to try out different roles. I managed to pull my own weight while working in teams of experienced professionals, and their trust in me really boosted my confidence in my own code. It was amazing to be working with passionate people who all possess expertise in various fields and to have the opportunity to learn from people with so many different backgrounds. The feedback I received from my supervisors really helped me understand my professional strengths and weaknesses."
      ),
      new Experience(
        "assets/images/vhub.png",
        "Volleyball Hub",
        "Digital Marketing Associate",
        "London/Remote, Sep 2017 - present",
        "I helped market and promote a new business that provides skill clinics for local players. Volleyball is a strong passion of mine and it was amazing to share this passion with others, and to help develop the London volleyball community. Apart from developing my business acumen and people skills, this role also helped stretch my creative abilities and event management capabilities."
      )
      // new Experience(
      //   "assets/images/ttp.png",
      //   "To The Point Pte Ltd",
      //   "Work Experience",
      //   "Singapore, August 2015",
      //   "das"
      // ),
      // new Experience(
      //   "assets/images/uom.png",
      //   "School of Computer Science",
      //   "Student Ambassador",
      //   "Manchester, Sep 2016 - 2017",
      //   "ads"
      // )
    ]
  }

  ngOnInit() {
  }

}
