import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-MainPage',
  templateUrl: './MainPage.component.html',
  styleUrls: ['./MainPage.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() {



  }
  elem="cod";
  changeBack(elem: string){
    //$('.main').css('background', 'url(../../Images/Back/csgo_back.png)');
    //document.querySelector(".main").style.background="url('../../Images/Back/csgo_back.png')";
    this.elem=elem;
  }
  routToCSGO(){
    const routerLink='/cs-go';
  }
  ngOnInit() {
  }



}
