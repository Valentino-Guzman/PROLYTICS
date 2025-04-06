import { Routes } from '@angular/router';
    
export const routes: Routes = [
    { 
        path: 'profile/:id', loadChildren: () => import('./components/profile-background/profile.module').then(m => m.ProfileModule)
    },
    
];
