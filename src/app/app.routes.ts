import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WelcomeComponent} from './alt/welcome/welcome.component';
import {ContactComponent} from './alt/contact/contact.component';
import {AboutComponent} from './alt/about/about.component';
import {MarketplaceComponent} from './marketplace/marketplace.component';
import {AlbumDetailComponent} from './album-detail/album-detail.component';
//import {ClubComponent} from './club/club.component';

const appRoutes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'shop', component: MarketplaceComponent},
  {path: 'albums/:id', component: AlbumDetailComponent},
  //{path: 'clubs', component: ClubComponent}
  {path: 'clubs', redirectTo: 'clubs', pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
