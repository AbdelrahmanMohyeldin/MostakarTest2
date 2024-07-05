import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Home/header/header.component';
import { ServiceCardComponent } from './Home/service-card/service-card.component';
import { ServiceListComponent } from './Home/service-list/service-list.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './Home/project/project.component';
import { ProjectListComponent } from './Home/project-list/project-list.component';
import { ProjectDetailsComponent } from './Home/project-details/project-details.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { AboutComponent } from './Home/about/about.component';
import { ContactComponent } from './Home/contact/contact.component';
import { GotopComponent } from './gotop/gotop.component';
import { ContactFormComponent } from './Home/contact-form/contact-form.component';
import { DevelopersComponent } from './developers/developers.component';
import { LocationOptionComponent } from './Home/location-option/location-option.component';
import { ProjectListDubaiComponent } from './Home/project-list-dubai/project-list-dubai.component';
import { ProjectDetailsDubaiComponent } from './Home/project-details-dubai/project-details-dubai.component';
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiceCardComponent,
    ServiceListComponent,
    WhatsappComponent,
    NavbarComponent,
    FooterComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    HomePageComponent,
    AboutComponent,
    ContactComponent,
    GotopComponent,
    ContactFormComponent,
    DevelopersComponent,
    LocationOptionComponent,
    ProjectListDubaiComponent,
    ProjectDetailsDubaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule
  ],
  providers: [{provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks}],
  bootstrap: [AppComponent]
})
export class AppModule { }
