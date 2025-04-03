import { Component } from '@angular/core';
import { PlayingCardComponent } from "./playing-card/playing-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [PlayingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardComponent]
})

export class AppComponent {
  
}
