import {Injectable} from '@angular/core';
import {Hero} from "./heroes/hero";
import {HEROES} from "./heroes/mock-heroes";

import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({  // alows angulare to do dependency injection of HeroSection in other part's of the program. This will also be a singleton
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add(`HeroService: Fetched Heroes`);
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
