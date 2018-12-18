import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  /**
   * * This function returns reduce value with respect to x
   * @parameter {*} x
   * @return
   * @memberof HeaderComponent
   */
  reducerVal(x) {
    return x;
  }

}
