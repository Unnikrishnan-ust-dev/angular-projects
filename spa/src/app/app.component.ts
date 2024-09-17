import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) { }
  routeTo(path: string) {
    switch (path) {
      case "home":
        this.router.navigateByUrl("");
        break;
      case "about":
        this.router.navigateByUrl("/about");
        break;
      case "register":
        this.router.navigateByUrl("/registration");
        break;
      default:
        break;
    }

  }
  title = 'spa';
}
