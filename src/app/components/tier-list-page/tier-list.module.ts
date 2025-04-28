import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TierListChampionsStatsComponent } from './tier-list-champions-stats/tier-list-champions-stats.component';



const routes: Routes = [
  { 
    path: 'champions', component: TierListChampionsStatsComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    TierListChampionsStatsComponent
  ],
})
export class TierListModule {}