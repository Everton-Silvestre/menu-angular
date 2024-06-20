import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRoles: string[] = [];

  constructor() {
    // Simula o carregamento dos papéis do usuário (normalmente, isso viria de um serviço de autenticação real)
    this.userRoles = ['user']; // Exemplo: usuário autenticado com papel de "user"
  }

  hasPermission(requiredRoles: string[]): boolean {
    return requiredRoles.some(role => this.userRoles.includes(role));
  }
}