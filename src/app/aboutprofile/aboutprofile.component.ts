import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutprofile',
  templateUrl: './aboutprofile.component.html',
  styleUrls: ['./aboutprofile.component.css']
})


export class AboutprofileComponent implements OnInit {

  aboutmecol1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut, autem consequatur delectus" +
    " dolorum eaque eius enim illo minus molestiae nostrum provident quasi qui quisquam sapiente? Ab at ullam veniam";

  aboutmecol2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut, autem consequatur delectus" +
    " dolorum eaque eius enim illo minus molestiae nostrum provident quasi qui quisquam sapiente? Ab at ullam veniam";

  constructor() { }

  ngOnInit() {
  }

}
