import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/Pages&Components/MainPage/MainPage.component';
import { CSGOPageComponent } from 'src/Pages&Components/CSGOPage/CSGOPage.component';
import { ValorantPageComponent } from 'src/Pages&Components/ValorantPage/ValorantPage.component';
import { Error404Component } from 'src/Pages&Components/Error404/Error404.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'cs-go', component: CSGOPageComponent},
  {path: 'valorant', component: ValorantPageComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
