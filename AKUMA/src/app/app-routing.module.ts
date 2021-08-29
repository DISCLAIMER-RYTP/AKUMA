import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from 'src/Pages&Components/MainPage/MainPage.component';
import { CSGOPageComponent } from 'src/Pages&Components/CSGOPage/CSGOPage.component';
import { ValorantPageComponent } from 'src/Pages&Components/ValorantPage/ValorantPage.component';
import { Error404Component } from 'src/Pages&Components/Error404/Error404.component';
import { CoDPageComponent } from 'src/Pages&Components/CoDPage/CoDPage.component';
import { DotaPageComponent } from 'src/Pages&Components/DotaPage/DotaPage.component';
import { FIFAPageComponent } from 'src/Pages&Components/FIFAPage/FIFAPage.component';
import { LoLPageComponent } from 'src/Pages&Components/LoLPage/LoLPage.component';
import { OverwatchPageComponent } from 'src/Pages&Components/OverwatchPage/OverwatchPage.component';
import { PUBGPageComponent } from 'src/Pages&Components/PUBGPage/PUBGPage.component';
import { RSSPageComponent } from 'src/Pages&Components/RSSPage/RSSPage.component';



const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'cs-go', component: CSGOPageComponent},
  { path: 'valorant', component: ValorantPageComponent},
  { path: 'call-of-duty', component: CoDPageComponent},
  { path: 'dota2', component: DotaPageComponent},
  { path: 'fifa', component: FIFAPageComponent},
  { path: 'league-of-legends', component: LoLPageComponent},
  { path: 'overwatch', component: OverwatchPageComponent},
  { path: 'pubg', component: PUBGPageComponent},
  { path: 'rainbow-six-siege', component:RSSPageComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
