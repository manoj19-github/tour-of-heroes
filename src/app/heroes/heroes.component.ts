import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.interface';
import { HEROES } from './mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(myHero: Hero): void {
    this.selectedHero = myHero;
    this.messageService.add(`HeroesComponent : Selected hero id =
     ${myHero.id} `);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  goToDetails(heroId: number) {
    this.router.navigate(['/details', heroId]);
  }
}
