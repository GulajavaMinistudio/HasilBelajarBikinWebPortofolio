import { Component, OnInit } from '@angular/core';
import {PortofolioItem} from "../services/portofolio-items";
import {PortofolioList} from "../services/portofolio-link-const";

@Component({
  selector: 'app-portofoliolist',
  templateUrl: './portofoliolist.component.html',
  styleUrls: ['./portofoliolist.component.css']
})
export class PortofoliolistComponent implements OnInit {

  list_link_portofolio : PortofolioItem[];

  constructor() { }

  ngOnInit() {
    this.list_link_portofolio = PortofolioList;
  }

}
