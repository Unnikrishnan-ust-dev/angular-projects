import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnChanges,DoCheck{
  title : string = "TItle";
  title2 : string ="MyFlipkart"
  a : number = 10;
  b : number = 20;
  
  constructor() {
    console.log("Parent constructor called");
  }

  ngDoCheck(): void {
    console.log("Parent DoCheck called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Parent onchange called");
    for(let change in changes){
      console.log(change,changes[change]);
    }
  }

  ngOnInit(): void {
    console.log("Parent Init called");
  }

}
