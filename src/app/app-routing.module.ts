import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ContactComponent } from './contact/contact.component';
import { HomeKaComponent } from './home-ka/home-ka.component';
import { HomeComponent } from './home/home.component';
import { Lesson1BasicsComponent } from './lesson1-basics/lesson1-basics.component';
import { LoadingComponent } from './loading/loading.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {
    path: '',
    component:LoadingComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path: "thanks",
    component:ThanksComponent
  },  
  {
    path: "board",
    component:BoardComponent
  },
  {
    path: "board/lesson1",
    component:Lesson1BasicsComponent
  },
  {
    path: "home/ka",
    component:HomeKaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
