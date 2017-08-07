import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// importing components
import { AppComponent } from './app.component';
import { ContactComponent } from './alt/contact/contact.component';
import { FooterComponent } from './alt/footer/footer.component';
import { WelcomeComponent } from './alt/welcome/welcome.component';
import { AboutComponent } from './alt/about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { NavComponent } from './alt/nav/nav.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';


import {routing} from './app.routes';
//import { ClubComponent } from './club/club.component';

//for child routes of club
import {ClubModule} from './club/club.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    WelcomeComponent,
    AboutComponent,
    NavComponent,
    MarketplaceComponent,
    AlbumDetailComponent

    //ClubComponent

  ],
  imports: [
    BrowserModule,
    ClubModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent, NavComponent]
})
export class AppModule { }
