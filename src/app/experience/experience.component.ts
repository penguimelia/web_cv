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
        "assets/img/accenture.svg",
        "Accenture",
        "Technology Placement",
        "London, Jul 2017 - 2018",
        "This internship was a great introduction into the consulting industry and allowed me to try out different roles. I managed to pull my own weight while working in teams of experienced developers, and their trust in me really boosted my confidence in my own code and capabilities. It was awesome to be working with and learning from passionate people who all possessed expertise in different fields! The feedback I received also really helped me understand my professional strengths and weaknesses."
      ),
      new Experience(
        "assets/img/vhub.png",
        "Volleyball Hub",
        "Digital Marketing Associate",
        "London/Remote, Sep 2017 - present",
        "I helped market and promote a new business that provides skill clinics for local players. Volleyball is a strong passion of mine and I love to share this passion with others, and to help develop the London volleyball community. Apart from developing my business acumen and people skills, this role also helped stretch my creative and event management capabilities."
      ),
      new Experience(
        "assets/img/ttp.png",
        "To The Point Pte Ltd",
        "Work Experience",
        "Singapore, August 2015",
        "TTP is a provider of enterprise IT software, and my short stint here was an appetiser of what it was like to work in technology. This was where I first saw how much everyday business can be made more efficient with technology! It was an amazing feeling to see how my presence really helped contribute to the success of the project."
      ),
      // new Experience(
      //   "assets/img/uom.png",
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
