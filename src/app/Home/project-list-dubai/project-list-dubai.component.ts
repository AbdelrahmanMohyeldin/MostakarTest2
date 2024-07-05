import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AOS from 'aos';
import projects from "../../../assets/MostakarDB.json"



@Component({
  selector: 'app-project-list-dubai',
  templateUrl: './project-list-dubai.component.html',
  styleUrls: ['./project-list-dubai.component.scss']
})
export class ProjectListDubaiComponent implements OnInit {

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
    // console.log(this.activatedEoute.snapshot.url[0].path)
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
