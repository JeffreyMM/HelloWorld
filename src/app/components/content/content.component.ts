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
    color:"blue",
    'font-size':'10px'
  };

  custom="style1";

  allClass="all";


  arr= [
    // {
    //   name:"zhangsan1",
    //   age:20
    // },
    // {
    //   name:"zhangsan2",
    //   age:21
    // },
    // {
    //   name:"zhangsan3",
    //   age:22
    // },
    // {
    //   name:"zhangsan4",
    //   age:15
    // },
    // {
    //   name:"zhangsan5",
    //   age:19
    // },
  ];
  constructor() { }

  ngOnInit() {
  }

}
