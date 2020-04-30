import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { PhotographyViewComponent } from './photography-view/photography-view.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeViewComponent, AboutViewComponent, PhotographyViewComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
