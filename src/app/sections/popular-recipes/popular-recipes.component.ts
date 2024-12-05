import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-popular-recipes',
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './popular-recipes.component.html',
  standalone: true,
  styleUrl: './popular-recipes.component.css'
})
export class PopularRecipesComponent {
  recipes = [
    { image: './assets/images/postre-peruano.png', title: 'Postres Peruanos' },
    { image: './assets/images/plato-de-causa-rellena.png', title: 'Causa Rellena' },
    { image: './assets/images/plato-de-lomo-saltado.png', title: 'Ají de Gallina' },
    { image: './assets/images/pisco-sour.png', title: 'Pisco Sour' },
    { image: './assets/images/plato-de-ceviche.png', title: 'Ceviche' },
  ];
}
