import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './hero-list';

@Injectable({
  providedIn: 'root'
})
export class HeroFetchService {

  constructor() { }

  heroFetch(): Observable<any>{
    return of(HEROES);
  }
}
