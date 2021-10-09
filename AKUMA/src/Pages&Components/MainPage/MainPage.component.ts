import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-MainPage',
  templateUrl: './MainPage.component.html',
  styleUrls: ['./MainPage.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router:Router) {



  }
  elem="cod";
  changeBack(elem: string){
    //$('.main').css('background', 'url(../../Images/Back/csgo_back.png)');
    //document.querySelector(".main").style.background="url('../../Images/Back/csgo_back.png')";
    this.elem=elem;
  }
  routTo(elem:string){
    this.router.navigate([`/${elem}`])
  }
  ngOnInit() {
  }



}
