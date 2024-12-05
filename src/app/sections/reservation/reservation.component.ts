import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ButtonComponent} from '../../common-components/button/button.component';

@Component({
  selector: 'app-reservation',
  imports: [
    NgOptimizedImage,
    ButtonComponent
  ],
  templateUrl: './reservation.component.html',
  standalone: true,
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  onReservationClick() {
    alert('Reservation button clicked');
  }
}
