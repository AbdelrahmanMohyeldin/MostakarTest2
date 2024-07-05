import { Component, OnInit } from '@angular/core';
import projects from "../../../assets/MostakarDB.json"
import AOS from 'aos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  Products:any
  startPage : any
  paginationLimit:any
  constructor(private activatedEoute : ActivatedRoute) {
    this.startPage = 0;
    this.paginationLimit = 6;
  }

  ngOnInit(): void {
    AOS.init();
  this.activatedEoute.snapshot.url[0].path == "turkey-projects"?this.Products = projects.turk: this.Products = projects.dubai
    console.log(this.activatedEoute.snapshot)
  }

  showMoreItems()
   {
      this.paginationLimit = Number(this.paginationLimit) + 6;
   }
   showLessItems()
   {
     this.paginationLimit = Number(this.paginationLimit) - 6;
   }
}
