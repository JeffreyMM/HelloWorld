import { Injectable } from '@angular/core';

@Injectable()
export class ShowalertService {

  constructor() { }
  showMessage(content){
    alert(content);
  }
}
