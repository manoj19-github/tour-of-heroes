import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero.interface';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { ConstantPool } from '@angular/compiler';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | null = null;
  heroId: number | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    this.activatedRoute.paramMap.subscribe(
      (param) => (this.heroId = Number(param.get('id')))
    );
    console.log({ heroId: this.heroId });
    console.log('manoj');
    if (this.heroId)
      this.heroService
        .getHero(this.heroId)
        .subscribe((self) => (this.hero = self));
  }
  goBack(): void {
    this.location.back();
  }
}
