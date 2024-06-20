import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../model/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  menus: Menu[] = [];

  constructor(private menuService: MenuService, private authService: AuthService) {}

  ngOnInit(): void {
    this.menuService.getMenus().subscribe((data: Menu[]) => {
      this.menus = data
        .filter(menu => this.authService.hasPermission(menu.permissions))
        .sort((a: Menu, b: Menu) => a.order - b.order);

      this.menus.forEach(menu => {
        menu.submenus = menu.submenus
          .filter(submenu => this.authService.hasPermission(submenu.permissions))
          .sort((a, b) => a.order - b.order);
      });
    });
  }
}