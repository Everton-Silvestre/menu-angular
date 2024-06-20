export interface SubMenu {
    id: number;
    name: string;
    order: number;
  }
  
  export interface Menu {
    id: number;
    name: string;
    order: number;
    path: string;
    permissions: string[];
    submenus: Menu[];
  }