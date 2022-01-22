import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";

import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({  // Decorator (allows to specify meta data
  selector: 'app-heroes',  // css selector used in html <app-heroes>
  templateUrl: './heroes.component.html', // Where the html file is stored
  styleUrls: ['./heroes.component.css'] // Where the (multiple) css file are stored
})
export class HeroesComponent implements OnInit {  //To make sure other areas of are program can import the HeroesComponent class example: import { HeroesComponent } from './heroes/heroes.component';
// implementation of OnInit is a lifecycle hook. It makes the 'ngOnIt():void {}' and this will execute when the HeroesComponent is initialized.

  heroes!: Hero[];
  selectedHero?: Hero

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
