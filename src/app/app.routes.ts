import { Routes } from '@angular/router';
    
export const routes: Routes = [
    {
        path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    },
    { 
        path: 'profile/:id', loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path: 'tier-list', loadChildren: () => import('./components/tier-list-page/tier-list.module').then(m => m.TierListModule)
    }
];
