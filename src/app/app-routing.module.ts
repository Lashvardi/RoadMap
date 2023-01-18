import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
