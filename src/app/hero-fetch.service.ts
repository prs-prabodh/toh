import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './hero-list';
import { MessageService } from './message-service.service';

@Injectable({
  providedIn: 'root'
})
export class HeroFetchService {

  constructor(private messageService: MessageService) { }

  heroFetch(): Observable<any>{
    this.messageService.add('Heroes Fetched!!');
    return of(HEROES);
  }
}
