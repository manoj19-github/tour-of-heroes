import { Component } from '@angular/core';
import { Hero } from './hero.interface';
import { HEROES } from './mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;
  onSelect(myHero: Hero): void {
    this.selectedHero = myHero;
  }
}