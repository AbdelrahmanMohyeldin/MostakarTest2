import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
