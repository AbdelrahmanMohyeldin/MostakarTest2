import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import projects from '../../../assets/MostakarDB.json'

@Component({
  selector: 'app-location-option',
  templateUrl: './location-option.component.html',
  styleUrls: ['./location-option.component.scss']
})
export class LocationOptionComponent implements OnInit {

trk = projects.turk
dbi = projects.dubai

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateList = ()=>{
    this.router.navigate(['/turkey-projects',this.trk])
  }

  navigateDubaiList = ()=>{
    this.router.navigate(['/dubai-projects',this.dbi])
  }
}
