import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mostakarForm : FormGroup;
  constructor(private fb : FormBuilder) {
    this.mostakarForm = this.fb.group({
      inputName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      inputPhone: ['',[Validators.required,]],
      inputEmail: ['',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]]
      })
  }

  ngOnInit(): void {
    AOS.init();
  }

  get formControls(){
    return this.mostakarForm.controls;
  }

  formSubmit(){
    const scriptURL ='https://script.google.com/macros/s/AKfycbwvNlopSJ6W7du87aRuS9BTLLGrukWnASxFaxkFx7qGykcBUdkMXt03EJL9lAF02r08/exec'
    const myForm = document.forms[1]
    const myDataForm = new FormData (myForm)

    fetch(scriptURL, { method: 'POST', body: myDataForm })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    myForm.reset()
  }

}
