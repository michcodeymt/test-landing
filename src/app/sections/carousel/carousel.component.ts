import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from '../../common-components/button/button.component';

@Component({
  selector: 'app-carousel',
  imports: [
    NgOptimizedImage,
    ButtonComponent
  ],
  templateUrl: './carousel.component.html',
  standalone: true,
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  onCartClick() {
    alert('Cart clicked');
  }
}
