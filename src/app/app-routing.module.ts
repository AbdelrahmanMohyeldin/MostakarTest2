import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { ProjectDetailsComponent } from './Home/project-details/project-details.component';
import { DevelopersComponent } from './developers/developers.component';
import { ProjectListComponent } from './Home/project-list/project-list.component';
import { ProjectListDubaiComponent } from './Home/project-list-dubai/project-list-dubai.component';
import { ProjectDetailsDubaiComponent } from './Home/project-details-dubai/project-details-dubai.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"project-details/:id",component:ProjectDetailsComponent},
  {path:"project-details-dubai/:id",component:ProjectDetailsDubaiComponent},
  {path:"developers",component:DevelopersComponent},
  {path:"turkey-projects",component:ProjectListComponent},
  {path:"dubai-projects",component:ProjectListDubaiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
