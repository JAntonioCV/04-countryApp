import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';



@NgModule({
  declarations: [
    HomepageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomepageComponent,
    AboutPageComponent
  ]
})
export class SharedModule { }
