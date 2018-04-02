import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  text1 = "Jeffrey";
  text2 = "<h1>Gloria<h1>";
  text3 = "欢迎光临!";
  isRed = false;
  fontS = false;

  allStyle ={
    color:'red',
    'font-size':'50px'
  };

  constructor() { }

  ngOnInit() {
  }

}
