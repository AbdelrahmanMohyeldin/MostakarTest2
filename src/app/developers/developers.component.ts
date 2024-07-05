import { Component, OnInit } from '@angular/core';
import AOS from 'aos'

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {
  developers=[
    {
      imageSrc:"../../assets/images/Marwa.jpg",
      name:"Marwa Ahmed",
      title:"MEARN full stack Web Developer",
      linkedIn:"https://www.linkedin.com/in/marwa-ahmed-a45737219",
      gitHub:"https://github.com/MarwaAhmeed",
      whatsApp:"https://wa.me/201146691948"
    },
    {
      imageSrc:"../../assets/images/Khloud.jpg",
      name:"Khloud Mohamed",
      title:"MEARN full stack Web Developer",
      linkedIn:"https://www.linkedin.com/in/khloud-mohamed-5ab29619b",
      gitHub:"https://github.com/khloudmohameed",
      whatsApp:"https://wa.me/201158829791"
    },
    {
      imageSrc:"../../assets/images/Shehab.jpg",
      name:"Shehab Mahmoud",
      title:"MEARN full stack Web Developer",
      linkedIn:"https://www.linkedin.com/in/shehab-khallaf-312737133",
      gitHub:"https://github.com/Shehabkhallaf",
      whatsApp:"https://wa.me/201015222800"
    },
    {
      imageSrc:"../../assets/images/AbdElrahman.jpg",
      name:"Abdelrahman Mohyeldin",
      title:"MEARN full stack Web Developer",
      linkedIn:"https://www.linkedin.com/in/abdulrahmanmohieeldin/",
      gitHub:"https://github.com/abdulrahmanmohie/",
      whatsApp:"https://wa.me/201000982958"
    },
    {
      imageSrc:"../../assets/images/Ahmed.jpg",
      name:"Ahmed Bahaa Eldin",
      title:"MEARN full stack Web Developer",
      linkedIn:"https://www.linkedin.com/in/ahmed-bahaa-eldin/",
      gitHub:"https://github.com/BlackyTreasure",
      whatsApp:"https://wa.me/201092641944"
    }
  ]
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
}
