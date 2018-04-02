import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 title = "MESSAGE";

 @ViewChild("nav") nav;
  constructor() { }

  ngOnInit() {
  }

  showMessage(){
    alert("这是父组件的方法！");
  }

  getDataFromChild(data){
    alert(data);
  }

  getDataFromChild2(){
    alert(this.nav.childData1);
  }
}
