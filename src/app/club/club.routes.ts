import {Routes} from '@angular/router';

import {ClubComponent} from './clubs/club.component';
import {HomeComponent} from './home/home.component';
import {ClubDetailComponent} from './club-detail/club-detail.component';

export const clubRoutes: Routes = [
  {path: 'clubs', component: ClubComponent,  children:[
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path:':code', component:ClubDetailComponent }
  ]}
];
