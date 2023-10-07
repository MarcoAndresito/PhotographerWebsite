import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  isShowMenu: boolean = false;

  showMenu() {
    this.isShowMenu = true;
  }

  btn1() {
    this.isShowMenu = false;
  }

  btn2() {
    this.isShowMenu = false;
  }

  btn3() {
    this.isShowMenu = false;
  }

  @HostListener('window:scroll', []) scrollMenu() {
    this.isShowMenu = false;
  }
}
