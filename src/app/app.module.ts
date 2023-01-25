import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from './loading/loading.component';
import { ContactComponent } from './contact/contact.component';
import { ThanksComponent } from './thanks/thanks.component';
import { BoardComponent } from './board/board.component';
import { Lesson1BasicsComponent } from './lesson1-basics/lesson1-basics.component';
import { LeftdocumentationComponent } from './leftdocumentation/leftdocumentation.component';
import { HomeKaComponent } from './home-ka/home-ka.component';
import { LandingKaComponent } from './landing-ka/landing-ka.component';
import { NavbarKaComponent } from './navbar-ka/navbar-ka.component';
import { DocbarComponent } from './docbar/docbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LandingComponent,
    LoadingComponent,
    ContactComponent,
    ThanksComponent,
    BoardComponent,
    Lesson1BasicsComponent,
    LeftdocumentationComponent,
    HomeKaComponent,
    LandingKaComponent,
    NavbarKaComponent,
    DocbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
