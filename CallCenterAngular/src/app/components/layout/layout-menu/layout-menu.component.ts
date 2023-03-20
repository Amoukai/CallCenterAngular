import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'layout-menu',
  templateUrl: './layout-menu.component.html',
})
export class LayoutMenuComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const menuItems = document.querySelectorAll('.menu--item__has_sub_menu');

    menuItems.forEach((menuItem) => {
      const link = menuItem.querySelector('.menu--link');
      const subMenu = menuItem.querySelector('.sub_menu');

      // 當選單被點擊時，切換 menu-open 類別
      link?.addEventListener('click', (event) => {
        event.preventDefault();
        menuItem.classList.toggle('menu-open');
      });

      // 當選單失去焦點時，隱藏子選單
      menuItem.addEventListener('focusout', (event) => {
        if (!menuItem.contains(event.target as Element)) {
          menuItem.classList.remove('menu-open');
        }
      });

      // 當子選單被點擊時，隱藏子選單
      subMenu?.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    });
  }
}
