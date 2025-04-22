import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileBgMainComponent } from './profile-bg-main/profile-bg-main.component';

const routes: Routes = [
  { path: '', component: ProfileBgMainComponent } 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    ProfileBgMainComponent
  ],
})
export class ProfileModule {}