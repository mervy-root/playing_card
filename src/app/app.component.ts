import { Component } from '@angular/core';
import { PlayingCardComponent } from "./playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardComponent, SearchBarComponent]
})

export class AppComponent {
  monster1!: Monster; //on ne l initialise pas tout de suite et on s assure qu elle ne soit pas nulle
  count: number = 0;    //compter le nombre de fois que la recherche est effectue
  
  constructor(){
    this.monster1 = new Monster();
    this.monster1.name = "Pik";
    this.monster1.hp = 40;
    this.monster1.figureCaption = "N 002 Pik";
  }

  increaseCount(){
    this.count++;
  }
}
