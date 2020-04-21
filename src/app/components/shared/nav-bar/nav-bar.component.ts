import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    document.querySelector('.nav__mobile').addEventListener('click', function() {
      this.classList.toggle('active');
      document.querySelector('.nav__menu').classList.toggle('active');
    });
  }

  openSubmenu() {
    document.querySelector('#sub-menu').addEventListener('click', function() {
      document.querySelector('.nav__subMenu').classList.toggle('show');
      document.querySelector('.btn-chevron').classList.toggle('rotate');
    });
  }

}
