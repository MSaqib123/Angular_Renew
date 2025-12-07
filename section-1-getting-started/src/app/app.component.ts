import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  number = 0;
  increment() {
    this.number++;
  }


  /*
  
  ✔ {{ number }}
This is interpolation (data binding from Component → HTML).
What interpolation does?
{{ }} is used to display a variable's value from the component inside the HTML view.
*/
}
