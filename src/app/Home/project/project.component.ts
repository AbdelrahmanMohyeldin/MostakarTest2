import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() Products:any;
  routeStr : any

  constructor(
    private router :Router,
    private activatedEoute : ActivatedRoute
    ) { }

  ngOnInit(): void {

    
    this.activatedEoute.snapshot.url[0].path == "turkey-projects"?this.routeStr = '/project-details': this.routeStr = '/project-details-dubai'

    // console.log(this.activatedEoute.snapshot.url[0].path)
    // console.log(this.Products)
  }
  goToDetails(){
    this.router.navigate([this.routeStr,this.Products.projectId])
    
  }

  
}
