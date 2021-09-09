import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-MainPage',
  templateUrl: './MainPage.component.html',
  styleUrls: ['./MainPage.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() {
    /*setTimeout( window.onload = function () {

      let arr = ['csgo', 'dota', 'cod', 'lol', 'r6s', 'overwatch', 'pubg', 'valorant'];
      var lefter = <HTMLElement>document.querySelector('.lefter');
      for (var i = 0; i < arr.length; i++) {
        lefter.innerHTML += `
        <div class="card">
      <div class="name"></div>
      <div class="pers"></div>
    </div>
    `
      }



    }, 50);*/
  }
  ngOnInit() {
  }



}
