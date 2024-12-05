import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './sections/header/header.component';
import {CarouselComponent} from './sections/carousel/carousel.component';
import {PopularRecipesComponent} from './sections/popular-recipes/popular-recipes.component';
import {SeasonalDishComponent} from './sections/seasonal-dish/seasonal-dish.component';
import {HowItWorksComponent} from './sections/how-it-works/how-it-works.component';
import {UniqueExperienceComponent} from './sections/unique-experience/unique-experience.component';
import {ReservationComponent} from './sections/reservation/reservation.component';
import {FooterComponent} from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CarouselComponent, PopularRecipesComponent, SeasonalDishComponent, HowItWorksComponent, UniqueExperienceComponent, ReservationComponent, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-landing';
}
