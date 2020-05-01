import { NgModule } from '@angular/core';
import { HomeViewComponent } from './home-view/home-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutViewComponent } from './about-view/about-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { EventViewComponent } from './event-view/event-view.component';
import { PhotographyViewComponent } from './photography-view/photography-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'HomeViewComponent',
    pathMatch: 'full'
  },
  {
    path: 'HomeView',
    component: HomeViewComponent
  },
  {
    path: 'AboutView',
    component: AboutViewComponent
  },
  {
    path: 'ContactView',
    component: ContactViewComponent
  },
  {
    path: 'EventView',
    component: EventViewComponent
  },
  {
    path: 'PhotographyView',
    component: PhotographyViewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
