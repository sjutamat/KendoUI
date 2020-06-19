import { Component, OnInit } from '@angular/core';
import { items } from '../itemmenus'
const is = (fileName: string, ext: string) => new RegExp(`.${ext}\$`).test(fileName);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Ixion';
  constructor() { }
  public items: any[] = items;

  public iconClass({ text, items }: any): any {
      return {
          'k-i-file-pdf': is(text, 'pdf'),
          'k-i-folder': items !== undefined,
          'k-i-html': is(text, 'html'),
          'k-i-image': is(text, 'jpg|png'),
          'k-icon': true
      };
  }




  data: Array<any> = [{
      text: 'My Profile'
  }, {
      text: 'Friend Requests'
  }, {
      text: 'Account Settings'
  }, {
      text: 'Support'
  }, {
      text: 'Log Out'
  }];
  ngOnInit(): void {
  }

}
