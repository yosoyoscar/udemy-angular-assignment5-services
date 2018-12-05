import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCount: number = 0;
  inactiveToActiveCount: number = 0;

  constructor() { }

  addActiveToInactive(){
    this.activeToInactiveCount++;
    this.logCounts();
  }

  addInactiveToActive(){
    this.inactiveToActiveCount++;
    this.logCounts();
  }

  logCounts(){
    console.log('activeToInactiveCount:' + this.activeToInactiveCount + ' __ inactiveToActiveCount:' + this.inactiveToActiveCount);
  }
}
