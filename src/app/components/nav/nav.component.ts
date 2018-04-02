import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()
  title;
  @Input()
  showMessage;

  @Output() private event = new EventEmitter<string>();

  childData1 = "这是子组件数据！";




  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.event.emit("这是子组件的数据！");
  }

  childMeath1(){
    alert("这是子组件方法！");
  }
}
