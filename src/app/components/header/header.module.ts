import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderMainComponent } from './header-main/header-main.component';

const routes: Routes = [
  { path: '', component: HeaderMainComponent } 
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class HeaderModule {}