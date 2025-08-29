import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
  isSaiyan: boolean;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 3000,
      isSaiyan: true,
    },
    {
      id: 2,
      name: 'Vegetta',
      power: 1000,
      isSaiyan: true,
    },
    {
      id: 3,
      name: 'Freezer',
      power: 500,
      isSaiyan: false,
    },
  ]);
}
