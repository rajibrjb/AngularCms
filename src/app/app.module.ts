import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ValuesComponent } from './values/values.component';
import { SliderComponent } from './_shared/slider/slider.component';
import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { PortfolioComponent } from './_shared/portfolio/portfolio.component';
import { WorkProgressComponent } from './_pages/home/work-progress/work-progress.component';
import { TestimonialComponent } from './_shared/testimonial/testimonial.component';
import { HomeAboutUsComponent } from './_pages/home/home-about-us/home-about-us.component';
import { HomeExpertiseComponent } from './_pages/home/home-expertise/home-expertise.component';
import { HomeSubscribeComponent } from './_pages/home/home-subscribe/home-subscribe.component';
import { HomeBlogComponent } from './_pages/home/home-blog/home-blog.component';
import { TechnologiesComponent } from './_pages/home/technologies/technologies.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './_pages/home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      ValuesComponent,
      SliderComponent,
      HeaderComponent,
      FooterComponent,
      PortfolioComponent,
      WorkProgressComponent,
      TestimonialComponent,
      HomeAboutUsComponent,
      HomeExpertiseComponent,
      HomeSubscribeComponent,
      HomeBlogComponent,
      TechnologiesComponent,
      HomeComponent
   ],
   imports: [
      HttpClientModule,
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
