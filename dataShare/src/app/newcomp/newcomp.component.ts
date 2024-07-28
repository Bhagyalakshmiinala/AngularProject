import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  standalone: true,
  imports: [],
  templateUrl: './newcomp.component.html',
  styleUrl: './newcomp.component.css'
})
export class NewcompComponent {
@Input() childtitle:string

}
