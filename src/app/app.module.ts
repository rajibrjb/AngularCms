import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ValuesComponent } from './values/values.component';
import { SliderComponent } from './_shared/slider/slider.component';

@NgModule({
   declarations: [
      AppComponent,
      ValuesComponent,
      SliderComponent
   ],
   imports: [
      HttpClientModule,
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
