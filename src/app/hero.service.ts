import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mock-heroes';
import { Hero } from './heroes/hero.interface';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((self) => self.id === id)!;
    this.messageService.add(`HeroService : fetched hero id  = ${id} `);
    return of(hero);
  }
}
