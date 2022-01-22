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
}
