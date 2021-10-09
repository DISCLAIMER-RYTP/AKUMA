import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AKUMA';
  elem="cod";
  
  constructor(private router:Router) {
  }
  changeBack(elem: string){
    //$('.main').css('background', 'url(../../Images/Back/csgo_back.png)');
    //document.querySelector(".main").style.background="url('../../Images/Back/csgo_back.png')";
    this.elem=elem;
  }
  routTo(elem:string){
    this.router.navigate([`/${elem}`]);
  }
}
