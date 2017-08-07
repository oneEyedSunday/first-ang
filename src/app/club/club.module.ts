import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { clubRoutes} from './club.routes';

import {ClubComponent} from './clubs/club.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clubRoutes)
  ],
  declarations: [ClubComponent, ClubDetailComponent, HomeComponent],
  exports: [ClubComponent]
})
export class ClubModule { }
