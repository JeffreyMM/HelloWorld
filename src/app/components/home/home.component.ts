import { Component, OnInit } from '@angular/core';
import {ShowalertService} from '../../services/showalert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name ="limaojia";
  constructor(private showAlert:ShowalertService) { }

  ngOnInit() {
  }
  showMessage(){
    alert("Limaojia");
  }
  getKey(e){
    console.log(e.keyCode);
  }

  userService(){
    this.showAlert.showMessage("limaojia");
  }
}
