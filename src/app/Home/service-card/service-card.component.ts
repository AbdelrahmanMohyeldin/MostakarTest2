import { Component, OnInit} from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
