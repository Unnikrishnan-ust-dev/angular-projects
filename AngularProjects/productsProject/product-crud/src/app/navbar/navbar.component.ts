import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnChanges,OnInit,DoCheck{
  @Input()
  title: string = "";
  cartIconLink : string = "/assets/cart.png";

  constructor(){console.log(" Child contstructor called");}
  ngDoCheck(): void {
    console.log("Child DoCheck called");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child onchange called");
    for(let change in changes){
      console.log(change,changes[change]);
    }
  }

  ngOnInit(): void {
    console.log("Child Init called");
  }
}
