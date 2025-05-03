import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  //styleUrl: './app.component.css',
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class AppComponent {
  name = 'Sandi';
}
