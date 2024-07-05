import { Component, OnInit } from '@angular/core';
import projects from "../../../assets/MostakarDB.json"
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import AOS from 'aos';



@Component({
  selector: 'app-project-details-dubai',
  templateUrl: './project-details-dubai.component.html',
  styleUrls: ['./project-details-dubai.component.scss']
})
export class ProjectDetailsDubaiComponent implements OnInit {

  Products:any = projects.dubai 
  projectDetails:any
  activeID:number
  mostakarForm : FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb : FormBuilder,
    private router:Router

  ) {
      this.activeID = this.activatedRoute.snapshot.params['id'];
      this.projectDetails=this.Products.find((project:any) =>project.projectId == this.activeID);
      this.mostakarForm = this.fb.group({
      inputName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      inputPhone: ['',[Validators.required,]],
      inputEmail: ['',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]]
      })
   }

  ngOnInit(): void {
    AOS.init()
  }

  get formControls(){
    return this.mostakarForm.controls;
  }

  formSubmit(){
    const scriptURL ='https://script.google.com/macros/s/AKfycbwvNlopSJ6W7du87aRuS9BTLLGrukWnASxFaxkFx7qGykcBUdkMXt03EJL9lAF02r08/exec'
    const myForm = document.forms[0]
    const myDataForm = new FormData (myForm)

    fetch(scriptURL, { method: 'POST', body: myDataForm })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    myForm.reset()
  }

}
