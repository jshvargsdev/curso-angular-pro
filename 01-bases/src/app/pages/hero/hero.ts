import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.html',
})
export class Hero {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  heroNameCapitalize = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.update((value) => (value = 'Spiderman'));
    this.age.update((value) => (value = 22));
  }

  changeAge() {
    this.age.update((value) => (value = 60));
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
