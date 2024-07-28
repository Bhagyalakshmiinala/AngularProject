import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MyApplication';
  placeholderValue="Enter";
  objValue="bhagyalakshmi"

  onSubmit(){
    console.log(" Enter a value",this.objValue);
  }
arrlist =[1,2,3,4,5,6]

arrvalue = [
  {
    name : 'Bhagyalakshmi',
    age : 25
  },
  {
    name : 'Venkatesh',
    age : 26
  },
  {
    name : 'lakshmi',
    age : 25
  }

]

checkName = 'bhagyalakshmi'
}
