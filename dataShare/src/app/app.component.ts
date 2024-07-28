import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewcompComponent } from './newcomp/newcomp.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewcompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App root componet ';
  ctitle = 'App component data share with child'
}
