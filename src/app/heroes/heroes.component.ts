import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { HeroFetchService } from '../hero-fetch.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroFetch: HeroFetchService) { }

  ngOnInit() {
    this.getHeroes()
  }

  clicked(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroFetch.heroFetch().subscribe( heroes => this.heroes = heroes);
  }

}
