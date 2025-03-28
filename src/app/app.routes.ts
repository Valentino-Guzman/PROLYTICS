import { Routes } from '@angular/router';
import { HeaderMainComponent } from './components/header/header-main/header-main.component';
import { ProfileBgMainComponent } from './components/profile-background/profile-bg-main/profile-bg-main.component';
    
export const routes: Routes = [
    { 
        path: 'profile', loadChildren: () => import('./components/profile-background/profile.module').then(m => m.ProfileModule)
    },
    
];
