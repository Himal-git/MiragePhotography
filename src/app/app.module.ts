import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { EventViewComponent } from './event-view/event-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { PhotographyViewComponent } from './photography-view/photography-view.component';
import { FooterComponent } from './common/footer/footer.component';
import { IntroComponent } from './common/intro/intro.component';
import { GalleryComponent } from './common/gallery/gallery.component';
import { VideoComponent } from './common/video/video.component';
import { TestimonialsComponent } from './common/testimonials/testimonials.component';
import { AboutMeComponent } from './common/about-me/about-me.component';
import { NewsComponent } from './common/news/news.component';
import { ResponsePageComponent } from './common/response-page/response-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [AppComponent,
    NavigationComponent,
    HomeViewComponent,
    EventViewComponent,
    ContactViewComponent,
    AboutViewComponent,
    FooterComponent,
    IntroComponent,
    GalleryComponent,
    VideoComponent,
    TestimonialsComponent,
    AboutMeComponent,
    NewsComponent,
    PhotographyViewComponent,
    ResponsePageComponent,
    DashboardComponent
  
  ],
  imports: [BrowserModule, NgbModule, FormsModule, HttpModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
