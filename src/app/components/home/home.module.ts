import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-main/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent } 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    HomeComponent
  ],
})
export class HomeModule {}