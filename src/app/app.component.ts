import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeebCorner';

  location: string = "Home"
  public goto(loc: string): void {
    this.location = loc;
  }
  
}
