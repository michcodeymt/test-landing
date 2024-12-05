import { Component } from '@angular/core';
import { NgIf, NgFor, NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../../common-components/button/button.component';

@Component({
  selector: 'app-header',
  imports: [
    NgIf,
    NgFor,
    ButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  menuItems = ['Inicio', 'Menu', 'Nosotros', 'Reservas'];
  selectedItem = this.menuItems[0];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  selectItem(item: string) {
    this.selectedItem = item;
  }

  onContactClick() {
    alert('Contact clicked');
  }
}
