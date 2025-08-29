import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
})
export class Counter {
  counter = signal(10);

  increaseCounter() {
    this.counter.update((current) => current + 1);
  }

  decreaseCounter() {
    this.counter.update((current) => current - 1);
  }

  resetCounter() {
    this.counter.set(0);
  }
}
