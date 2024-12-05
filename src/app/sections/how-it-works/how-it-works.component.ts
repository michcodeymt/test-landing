import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  imports: [
    NgForOf
  ],
  templateUrl: './how-it-works.component.html',
  standalone: true,
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {
  cards = [
    {
      image: './assets/images/platos-de-comida.png',
      title: 'Card 1',
      description: 'Ofrecemos platos que combinan tradición y modernidad, diseñados para deleitar tu paladar.'
    },
    {
      image: './assets/images/restaurante.png',
      title: 'Card 2',
      description: 'Disfruta de un ambiente acogedor mientras degustas nuestros sabrosos platos.'
    },
    {
      image: './assets/images/chefs-en-la-cocina.png',
      title: 'Card 3',
      description: 'La excelencia de la cocina peruana se refleja en nuestros platos.'
    }
  ];
}
